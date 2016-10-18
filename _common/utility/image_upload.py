import os
import uuid


def get_image_upload_path(instance, filename):
    """Generate file path in form <ClassName>/<Slug>/<UUID>."""
    class_name = type(instance).__name__
    ext = os.path.splitext(filename)[1]
    file_id = '{0}{1}'.format(str(uuid.uuid4()), ext)
    return os.path.join(class_name, instance.slug, file_id)