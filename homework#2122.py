# import random
#
# random_list1 = list(random.randint(0, 1000) for i in range(100))
# random_list2 = list(random.randint(0, 1000) for j in range(100))
#
#
# def correlation(list1, list2):
#
#     for i in range(min(len(list1), len(list2))):
#         first, second = list1[i], list2[i]
#
#         if (first >= 0 and second >= 0) or (first <= 0 and second <= 0):
#             correlations.append(1)
#         else:
#             correlations.append(-1)
#
#     if correlations.count(1) > correlations.count(-1):
#         return 1
#     elif correlations.count(1) < correlations.count(-1):
#         return -1
#     else:
#         return 0
#
#
# print(correlation(
#     [1, 2, 3, 4],
#     [-1, -22, -3, 4],
# ))
#


