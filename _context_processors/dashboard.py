def user_details(request):
    if request.user.is_authenticated():
        return {
            'user_full_name': request.user.get_full_name,
        }
    else:
        return {}
