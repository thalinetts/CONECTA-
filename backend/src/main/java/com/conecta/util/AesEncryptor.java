package com.conecta.util;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;
import java.util.Base64;

public class AesEncryptor {

    private static final String ALGORITHM = "AES/CBC/PKCS5Padding";
    private static final byte[] FIXED_IV = "conecta-iv-16byt".getBytes();

    private static SecretKeySpec buildKey(String secret) throws Exception {
        byte[] hash = MessageDigest.getInstance("SHA-256").digest(secret.getBytes("UTF-8"));
        return new SecretKeySpec(hash, "AES");
    }

    public static String encrypt(String value, String secret) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, buildKey(secret), new IvParameterSpec(FIXED_IV));
            return Base64.getEncoder().encodeToString(cipher.doFinal(value.getBytes("UTF-8")));
        } catch (Exception e) {
            throw new RuntimeException("Erro ao criptografar", e);
        }
    }

    public static String decrypt(String encrypted, String secret) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, buildKey(secret), new IvParameterSpec(FIXED_IV));
            return new String(cipher.doFinal(Base64.getDecoder().decode(encrypted)), "UTF-8");
        } catch (Exception e) {
            throw new RuntimeException("Erro ao descriptografar", e);
        }
    }
}
