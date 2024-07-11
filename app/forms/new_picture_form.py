from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, Email, ValidationError




class NewPictureForm(FlaskForm):
  image_url = FileField('image', validators=[DataRequired()])
  location = StringField('location', validators=[DataRequired()])
  caption = StringField('caption', validators=[DataRequired()])
