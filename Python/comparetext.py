
file_1 = open('text1.txt', 'r')
file_2 = open('text2.txt', 'r')

file_1_line = file_1.readline()
file_2_line = file_2.readline()

line_no = 1

print()

with open('text1.txt') as file1:
    with open('text2.txt') as file2:
        same = set(file1).intersection(file2)

print("Common Lines in Both Files")

for line in same:
    print(line, end='')

print('\n')
print("Difference Lines in Both Files")
while file_1_line != '' or file_2_line != '':

    file_1_line = file_1_line.rstrip()
    file_2_line = file_2_line.rstrip()

    if file_1_line != file_2_line:

        if file_1_line == '':
            print("file1-", "Line-%d" % line_no, file_1_line)
        else:
            print("file1-", "Line-%d" % line_no, file_1_line)

        if file_2_line == '':
            print("file2-", "Line-%d" % line_no, file_2_line)
        else:
            print("file2-", "Line-%d" % line_no, file_2_line)

        print()

    file_1_line = file_1.readline()
    file_2_line = file_2.readline()

    line_no += 1

file_1.close()
file_2.close()
