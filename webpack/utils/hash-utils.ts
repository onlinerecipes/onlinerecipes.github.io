import { sha256, sha224 } from 'js-sha256';
const md5 = require('md5');
const Buffer = require('buffer/').Buffer;

export default class HashUtils {
  static textToSha256(text: string) {
    return sha256(text);
  }

  static textToSha224(text: string) {
    return sha224(text);
  }

  static textToMd5(text: string) {
    return md5(text);
  }

  static async textToShaCode(text: string, algorithm, isUpperCase: boolean) {
    if (!text) return Promise.resolve('');
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hash = await crypto.subtle.digest(algorithm, data);
    if (isUpperCase) return HashUtils.hexString(hash).toUpperCase();
    return HashUtils.hexString(hash).toLowerCase();
  }

  static async fileToShaCode(file, algorithm, isUpperCase: boolean) {
    if (!file) return Promise.resolve('');
    const buffer = await HashUtils.fileToArrayBuffer(file);
    const hash = await HashUtils.bufferToSha256(HashUtils.arrayBufferToBuffer(buffer), algorithm);
    if (isUpperCase) return HashUtils.hexString(hash).toUpperCase();
    return HashUtils.hexString(hash).toLowerCase();
  }

  private static arrayBufferToBuffer(ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
      buffer[i] = view[i];
    }
    return buffer;
  }

  private static hexString(buffer) {
    const byteArray = new Uint8Array(buffer);
    const hexCodes = [...byteArray].map((value) => {
      return value.toString(16).padStart(2, '0');
    });
    return hexCodes.join('');
  }

  private static async fileToArrayBuffer(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      const readFile = function (event) {
        const buffer = reader.result;
        resolve(buffer);
      };

      reader.addEventListener('load', readFile);
      reader.readAsArrayBuffer(file);
    });
  }

  private static async bufferToSha256(buffer, algorithm) {
    return window.crypto.subtle.digest(algorithm, buffer);
  }
}
