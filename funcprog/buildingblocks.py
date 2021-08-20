# referential transparency
# no globals!

class DB:
    def get_user(self, id):
        pass

def notify_subscribers():
    pass

db = DB()
def get_user_impure(user_id):
    db.get_user(user_id)
    notify_subscribers('user_found')

def get_user_pure(user_id):
    db.get_user(user_id)
    notify_subscribers('user_found')    

def controller_get_user(id):
    get_user_impure(id)


# function composition


def last_user_from_poland(users):
    def polish_users(users):
        return filter(lambda user: user.country == 'Poland', users)
    def sorted_users(users):
        return sorted(polish_users, key=polish_users.date_of_registration)
    return max(sorted_users(polish_users(users)))