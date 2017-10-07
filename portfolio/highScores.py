import pickle

class HighScores:
    def __init__(self):
        self.scoreList = list()

    def add_score(self, score):
        self.scoreList.append(score)

    def remove_score(self, index):
        del self.turn_tracker[index % len(self.scoreList)]

    def dump(self):
        data = pickle.dumps(self)
        return data

