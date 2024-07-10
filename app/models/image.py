from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Image(db.Model):
    __tablename__ = 'images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    caption = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, server_default=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'location': self.location,
            'caption': self.caption
        }
