integers = [1,2,3,4,5,6]
odd_ints = []
squared_odds = []
total = 0 
for i in integers:
    if i%2 == 1:
        odd_ints.append(i)
for i in odd_ints:
    squared_odds.append(i*i)
for i in squared_odds:
    total += i
print(total)



from functools import reduce
integers = [1,2,3,4,5,6]
odd_ints = filter(lambda n: n % 2 == 1, integers)
squared_odds = map(lambda n: n * n, odd_ints)
total = reduce(lambda acc, n: acc + n, squared_odds)    
print(total)