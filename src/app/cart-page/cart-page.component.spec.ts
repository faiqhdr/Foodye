import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPageComponent } from './cart-page.component';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { of } from 'rxjs';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let cartService: CartService;

  // Mock data for testing
  const mockCart: Cart = {
    items: [
      {
        food: {
          id: 1,
          name: 'Ayam Bakar',
          cookTime: '10-20',
          price: 21,
          favorite: false,
          origins: ['Indonesian Cuisine in General'],
          stars: 4,
          imageUrl: 'assets/images/foods/ayam-bakar.jpg',
        },
        quantity: 2,
        price: 42,
      },
      {
        food: {
          id: 4,
          name: 'Bakso Malang',
          price: 18,
          cookTime: '5-10',
          favorite: true,
          origins: ['Authentic Malang Cuisine'],
          stars: 5,
          imageUrl: 'assets/images/foods/bakso-malang.jpg',
        },
        quantity: 1,
        price: 18,
      },
    ],
    totalPrice: 27.97,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      providers: [
        {
          provide: CartService,
          useValue: {
            getCart: () => of(mockCart),
            removeFromCart: () => {},
            changeQuantity: () => {},
          },
        },
      ],
    });

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item from cart', () => {
    const cartItem: CartItem = mockCart.items[0];
    spyOn(cartService, 'removeFromCart');
    component.removeFromCart(cartItem);
    expect(cartService.removeFromCart).toHaveBeenCalledWith(cartItem.food.id);
  });

  it('should change item quantity in cart', () => {
    const cartItem: CartItem = mockCart.items[0];
    const newQuantity = '3';
    spyOn(cartService, 'changeQuantity');
    component.changeQuantity(cartItem, newQuantity);
    expect(cartService.changeQuantity).toHaveBeenCalledWith(
      cartItem.food.id,
      3
    );
  });

  it('should render cart items when the cart is not empty', () => {
    component.cart = mockCart;
    fixture.detectChanges();
    const cartItems = fixture.nativeElement.querySelectorAll('li');
    expect(cartItems.length).toBe(mockCart.items.length);
  });

  it('should render a message when the cart is empty', () => {
    component.cart = { items: [], totalPrice: 0 };
    fixture.detectChanges();
    const emptyCartMessage =
      fixture.nativeElement.querySelector('.not-found-message');
    expect(emptyCartMessage.textContent).toContain('Cart Page Is Empty!');
  });
});
