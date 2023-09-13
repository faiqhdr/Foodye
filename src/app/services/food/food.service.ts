import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[] {
    return [
      'assets/images/foods/ayam-bakar.jpg',
      'assets/images/foods/ayam-geprek.jpg',
      'assets/images/foods/ayam-penyet.jpg',
      'assets/images/foods/bakso-malang.jpg',
      'assets/images/foods/cakwe.jpg',
      'assets/images/foods/gado-gado.jpg',
      'assets/images/foods/gudeg.jpg',
      'assets/images/foods/indomie-goreng.jpg',
      'assets/images/foods/ketoprak.png',
      'assets/images/foods/lontong-opor.jpg',
      'assets/images/foods/nasi-goreng.jpg',
      'assets/images/foods/nasi-kuning.jpg',
      'assets/images/foods/nasi-liwet.jpg',
      'assets/images/foods/nasi-padang.jpeg',
      'assets/images/foods/nasi-uduk.jpg',
      'assets/images/foods/pancong.jpeg',
      'assets/images/foods/pukis.png',
      'assets/images/foods/sate-maranggi.jpg',
      'assets/images/foods/soto.jpg',
      'assets/images/foods/tahu-gejrot.jpg',
      'assets/images/foods/tahu-kalasan.jpg'
    ]
  }
}
