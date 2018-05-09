<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Manufacturer
 *
 * @see \CreateManufacturersTable
 * @see \ManufacturersTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Models\Media[] $media
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Manufacturer active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Manufacturer findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Manufacturer ordered()
 */
	class Manufacturer extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\OrderStatus
 *
 * @see \CreateOrderStatussTable
 * @see \OrderStatussTableSeeder
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\OrderStatus active()
 */
	class OrderStatus extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Banner
 *
 * @see \CreateBannersTable
 * @see \BannersTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Models\Media[] $media
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Banner active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Banner ordered()
 */
	class Banner extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Address
 *
 * @see \CreateAddressesTable
 * @see \AddressesTableSeeder
 * @property-read mixed $fulladdress
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Address full()
 */
	class Address extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\OptionValue
 *
 * @see \CreateOptionValuesTable
 * @see \OptionValuesTableSeeder
 * @property-read \App\Models\Option $option
 */
	class OptionValue extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ProductOption
 *
 * @see \CreateOptionsTable
 * @see \OptionsTableSeeder
 * @property-read \App\Models\Option $option
 * @property-read \App\Models\Product $product
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProductOptionValue[] $values
 */
	class ProductOption extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Review
 *
 * @see \CreateReviewsTable
 * @see \ReviewsTableSeeder
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Review active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Review ordered()
 */
	class Review extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Filter
 *
 * @see \CreateFiltersTable
 * @see \FiltersTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Category[] $categories
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Filter active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Filter ordered()
 */
	class Filter extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Option
 *
 * @see \CreateOptionsTable
 * @see \OptionsTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OptionValue[] $values
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Option active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Option ordered()
 */
	class Option extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ProductOptionValue
 *
 * @see \CreateOptionsTable
 * @see \OptionsTableSeeder
 * @property-read \App\Models\OptionValue $option_value
 * @property-read \App\Models\ProductOption $product_option
 */
	class ProductOptionValue extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ShippingMethod
 *
 * @see \CreateShippingMethodsTable
 * @see \ShippingMethodsTableSeeder
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ShippingMethod active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ShippingMethod ordered()
 */
	class ShippingMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Attribute
 *
 * @see \CreateAttributesTable
 * @see \AttributesTableSeeder
 * @property-read mixed $values
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Attribute active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Attribute ordered()
 */
	class Attribute extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\UserCoupons
 *
 * @property-read \App\Models\Coupon $coupon
 */
	class UserCoupons extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\MasterModel
 *
 */
	class MasterModel extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @see \CreateUsersTable
 * @see \UsersTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Address[] $addresses
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Book[] $books
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $cart
 * @property-read \App\Models\UserCoupons $coupon
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Order[] $orders
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Requisite[] $requisites
 * @property-write mixed $password
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $wishlist
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Page
 *
 * @see \CreatePagesTable
 * @see \PagesTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Models\Media[] $media
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Page active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Page findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Page ordered()
 */
	class Page extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Coupon
 *
 * @see \CreateCouponsTable
 * @see \CouponsTableSeeder
 * @property-read mixed $ends_at
 * @property-read mixed $starts_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Coupon current()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Coupon unused()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Coupon used()
 */
	class Coupon extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Media
 *
 * @property-read mixed $extension
 * @property-read mixed $human_readable_size
 * @property-read mixed $type
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $model
 * @method static \Illuminate\Database\Eloquent\Builder|\Spatie\MediaLibrary\Models\Media ordered()
 */
	class Media extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\News
 *
 * @see \CreateNewssTable
 * @see \NewssTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Models\Media[] $media
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\News active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\News findSimilarSlugs($attribute, $config, $slug)
 */
	class News extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Rate
 *
 */
	class Rate extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Requisite
 *
 * @see \CreateRequisitesTable
 * @see \RequisitesTableSeeder
 * @property-read mixed $fulladdress
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Requisite full()
 */
	class Requisite extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Product
 *
 * @see \CreateProductsTable
 * @see \ProductsTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Attribute[] $attributes
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Category[] $categories
 * @property-read mixed $calculated
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Models\Media[] $media
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProductOption[] $options
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Order[] $orders
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Review[] $reviews
 * @property-read \App\Models\Special $special
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Special[] $specials
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product ordered()
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Order
 *
 * @see \CreateOrdersTable
 * @see \OrdersTableSeeder
 * @property-read \App\Models\Address $address
 * @property-read \App\Models\Coupon $coupon
 * @property-read \App\Models\PaymentMethod $payment_method
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read \App\Models\ShippingMethod $shipping_method
 * @property-read \App\Models\OrderStatus $status
 * @property-read \App\Models\User $user
 */
	class Order extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Setting
 *
 * @see \CreateSettingsTable
 * @see \SettingsTableSeeder
 * @property mixed $value
 */
	class Setting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Feedback
 *
 * @see \CreateFeedbackTable
 * @property-read \App\Models\User $user
 */
	class Feedback extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Special
 *
 * @see \CreateSpecialsTable
 * @see \SpecialsTableSeeder
 * @property-read mixed $ends_at
 * @property-read mixed $starts_at
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Special current()
 */
	class Special extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Category
 *
 * @see \CreateCategorysTable
 * @see \CategorysTableSeeder
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Category[] $children
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Filter[] $filters
 * @property-read \App\Models\Category $parent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category nested(\Closure $callback = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category ordered()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category root()
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\BookStatus
 *
 * @see \CreateBookStatussTable
 * @see \BookStatussTableSeeder
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\BookStatus active()
 */
	class BookStatus extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Book
 *
 * @see \CreateBooksTable
 * @see \BooksTableSeeder
 * @property-read \App\Models\Address $address
 * @property-read \App\Models\PaymentMethod $payment_method
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-write mixed $date
 * @property-read \App\Models\ShippingMethod $shipping_method
 * @property-read \App\Models\BookStatus $status
 * @property-read \App\Models\User $user
 */
	class Book extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PaymentMethod
 *
 * @see \CreatePaymentMethodsTable
 * @see \PaymentMethodsTableSeeder
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PaymentMethod active()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PaymentMethod ordered()
 */
	class PaymentMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Cart
 *
 * @see \CreateCartsTable
 * @see \CartsTableSeeder
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\ShippingMethod $shippingmethod
 * @property-read \App\Models\User $user
 */
	class Cart extends \Eloquent {}
}

