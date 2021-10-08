/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author demon
 */

import java.io.*;
import java.util.*;


public class CifradoAES {
    
    
    public static void main(String[] args) throws Exception{
        
        String mensaje = "Habia una vez un patito que decia miau miau y queria jugar halo infinite, y tambien reprobar a los alumnos de batiz wiiiiiii :3";
        String mensajecifrado = AES.encrypt(mensaje);
        String mensajedescifrado = AES.decrypt(mensajecifrado);
        
        System.out.println("El mensaje en texto plano es: "+ mensaje);
        System.out.println("EL mensaje cifrado con AES 128 es: "+ mensajecifrado);
        System.out.println("EL mensaje descifrado con AES 128 es: "+ mensajedescifrado);
    }
    
    
}
