from uuid import uuid4

def gen_random_id(length=3):
    random_id = str(uuid4())
    return random_id[:length]