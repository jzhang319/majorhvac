from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Image, db
from app.forms.new_picture_form import NewPictureForm
from werkzeug.utils import secure_filename
from google.cloud import storage
from google.oauth2 import service_account
import os

image_routes = Blueprint('images', __name__)

key_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
credentials = service_account.Credentials.from_service_account_file(key_path)


@image_routes.route('/')
@login_required
def all_images():
    """
    Query for all images and returns them in a list of image dictionaries
    """
    images = Image.query.all()
    return {'images': [image.to_dict() for image in images]}


@image_routes.route('/<int:id>')
@login_required
def image(id):
    """
    Query for a image by id and returns that user in a dictionary
    """
    image = Image.query.get(id)
    return image.to_dict()

@image_routes.route('/upload', methods=['POST'])
@login_required
def add_image():
    """
    Add a new image and returns the new image in a dictionary
    """
    form = NewPictureForm()
    if form.validate_on_submit():
        file = form.image.data
        filename = secure_filename(file.filename)

        # upload file to google cloud storage
        client = storage.Client(credentials=credentials)
        bucket = client.bucket('majorhvac')
        blob = bucket.blob(filename)
        blob.upload_from_file(file)

        image_url = blob.public_url
        location = form.location.data
        caption = form.caption.data

        new_image = Image(
            image_url=image_url,
            location=location,
            caption=caption
        )
        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict(), 201
    return form.errors, 400
