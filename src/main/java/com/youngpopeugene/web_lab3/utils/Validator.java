package com.youngpopeugene.web_lab3.utils;

import com.youngpopeugene.web_lab3.entity.Shot;

public class Validator {
    public static boolean isValid(Shot aShot){
        double x = aShot.getX();
        double y = aShot.getY();
        double r = aShot.getR();
        return (x >= -3 && x <= 5 && y >= -3 && y <= 5 && r >= 1 && r <= 3 && r % 0.5 == 0.);
    }
}
