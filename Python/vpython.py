from vpython import *

#sphere and box functions create a 3d object with specified pos, size and other properties
ball = sphere(pos=vector(0,0,0), radius=0.5, color=color.cyan)
wallR = box(pos=vector(6,0,0), color=color.green, size=vector(0.2,12,12))
wallL= box(pos=vector(-6,0,0), color=color.green, size=vector(0.2,12,12))
wallU = box(pos=vector(0,6,0), color=color.green, size=vector(12,0.2,12))
wallD= box(pos=vector(0,-6,0), color=color.green, size=vector(12,0.2,12))

ball.velocity=vector(25,5,0) #Setting arbitarty initial velocity for ball
deltat=0.005 #rate of change of time (Speed of our animation)
t=0

while True:
    rate(100)  #Rate sets an upper limit. 
    #Here its telling the computer to not do more than 100 loops in a second

    ball.pos += ball.velocity*deltat #increasing the position of ball vel*change_in_time
    t = t + deltat #updating time

    #if ball hits a wall, vel is reversed (0.7 added to account for thickness of wall)
    if ball.pos.x > wallR.pos.x - 0.7 or ball.pos.x < wallL.pos.x + 0.7:
        ball.velocity.x *= -1
    if ball.pos.y > wallU.pos.y - 0.7 or ball.pos.y < wallD.pos.y + 0.7:
        ball.velocity.y *= -1    