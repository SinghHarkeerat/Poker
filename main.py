import pygame
import random

# pygame.init()

# screen = pygame.display.set_mode((800, 600))
# pygame.display.set_caption("Poker")
# FWHITE  = (231, 234, 229)

class Card:
    def __init__(self, suit, num):
        self.suit = suit
        self.num = num
    
    def loadCard():
        pass #todo
    
    def __str__(self):
        return f"{self.suit}{self.num}"

class Dick:
    def __init__(self):
        self.suits = ["H", "D", "C", "S"] 
        self.num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    def create_dick(self):
        deck = []
        for rank in self.num:
            for suit in self.suits:
                deck.append(Card(rank, suit))
        return deck


def shuffleDeck():
    random.shuffle(makeStrDeck())


    

    
    




    

        
            
# while True:
#     screen.fill(FWHITE)
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT:
#             pygame.quit()
#             break
    
#     pygame.display.update()