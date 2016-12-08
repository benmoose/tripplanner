from django.db import models

from _common.models.mixins.mixins import VoteableModel


class Vote(VoteableModel):
    EMOJI_CHOICES = (
        ('U+1F600', 'Smile'),
        ('U+1F60D', 'Heart Face'),
        ('U+1F608', 'Evil Face'),
        ('U+1F44D', 'Thumbs Up'),
        ('U+1F44E', 'Thumbs Down'),
        ('U+2764', 'Heart'),
        ('U+1F389', 'Party'),
    )

    emoji = models.CharField(max_length=7, choices=EMOJI_CHOICES)

    def __str__(self):
        return '{0} ({1})'.format(self.get_emoji_display(), self.votes)
