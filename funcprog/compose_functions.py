# https://app.dataquest.io/c/48/m/263/functional-programming/10/using-functional-composition

from functools import partial, reduce

def add_two(x):
    return x + 2

def multiply_by_four(x):
    return x * 4

def subtract_seven(x):
    return x - 7

def compose(*func):
    def compose_internal(f, g):
        return lambda x : f(g(x))
    return reduce(compose_internal, func, lambda x : x)

composed = compose(
    subtract_seven,  # - 7
    multiply_by_four,  # * 4
    add_two  # + 2
)

# (((10 + 2) * 4) - 7) = 41
answer = composed(10)
print(answer)