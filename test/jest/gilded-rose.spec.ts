import { Item, GildedRose } from '@/gilded-rose';
import * as assert from "node:assert";



describe('Gilded Rose', () => {
  it('Naming', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe('foo');
  });

  it('sword quality drops by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });


  describe('Common item', () => {
    describe('Quality is never negative', () => {
      it('Test 1', () => {
        const gildedRose = new GildedRose([new Item('Rose', 10, 10)]);
        const items = gildedRose.updateQuality();
        const updatedQuality= items[0].quality;
        expect(updatedQuality).toBe(0);
      });

      it('Test 2', () => {
        const gildedRose = new GildedRose([new Item('Red Hat', 1000, 10)]);
        const items = gildedRose.updateQuality();
        const quality= items[0].quality;
        expect(quality).toBe(0);
      });


      describe('Decreasing quality before data passed', () => {
        it('Test 1', () => {
          const gildedRose = new GildedRose([new Item('Rose', 10, 5)]);
          const items = gildedRose.updateQuality();
          const updatedQuality= items[0].quality;
          expect(updatedQuality).toBe(5);
        });
      })
    })
  });

  describe('Aged Brie', () => {

  });

  describe('Sulfuras', () => {

  });

  describe('Backstage passes', () => {

  });



});
