# Ransom Note
# Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
# Each letter in magazine can only be used once in ransomNote.
# Example 1:
# Input: ransomNote = "a", magazine = "b"
# Output: false
# Example 2:
# Input: ransomNote = "aa", magazine = "ab"
# Output: false
# Example 3:
# Input: ransomNote = "aa", magazine = "aab"
# Output: true

def can_construct(ransomnote, magazine):
    if ransomnote == '':
        return True

    if magazine == '':
        return False

    letter = {}

    for letter in magazine:
        if letter in letter:
            letter[letter] += 1
        else:
            letter[letter] = 1

    for char in ransomnote:
        if char not in letter or letter[char] == 0:
            return False

        letter[char] -= 1

    return True
print(can_construct('aa', 'aab'))