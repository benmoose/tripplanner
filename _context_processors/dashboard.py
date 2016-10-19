def user_details(request):
    return {
        'user_full_name': request.user.get_full_name,
    }
