import React from "react";

const Terms = () => {
  return (
    <div className="py-6 md:py-12 lg:py-16 container mx-auto">
      <div className="container px-4 md:px-6">
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <div className="pb-4 space-y-2 border-b border-gray-800 dark:border-gray-800">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Last updated: July 27, 2024
            </p>
          </div>
          <div className="mx-auto prose max-w-none">
            <p>
              By using our website or purchasing products, you agree to be bound
              by these Terms and Conditions. Please read them carefully.
            </p>
            <div>
              <ol>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Company Information</b>: Luna
                    LLC is registered in Japan, and imports ethnic clothing and
                    accessories from Nepal.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Products and Availability</b>:
                    We strive to ensure the accuracy and availability of
                    products on our website. However, stock may be limited or
                    subject to change, and we reserve the right to cancel or
                    modify orders in such cases.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Pricing</b>: All prices listed
                    are in Japanese Yen (JPY) and are inclusive of applicable
                    taxes, unless otherwise stated. We reserve the right to
                    change prices at any time without prior notice.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Ordering and Payment</b>:
                    Orders are processed once full payment is received. We
                    accept payments via credit cards, bank transfers, and other
                    methods specified on our site.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Shipping and Delivery</b>:
                    Shipping costs and delivery times are calculated at checkout
                    based on the destination. We are not responsible for delays
                    caused by customs or other external factors.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Returns & Exchanges</b>: We
                    accept returns and exchanges within 14 days from receipt of
                    your order, provided items are unused, unworn, and in
                    original packaging. Customers are responsible for return
                    shipping costs unless the item is faulty.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Customs and Duties</b>:{" "}
                    {`Import
                    duties, taxes, and other charges are the buyer's
                    responsibility. Please check with your local customs office
                    for any applicable fees before making a purchase.`}
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Intellectual Property</b>: All
                    content on our website, including images, text, and logos,
                    is protected by intellectual property laws and may not be
                    reproduced without permission.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Limitation of Liability</b>:
                    We are not liable for any damages arising from the use or
                    inability to use our products. Our liability is limited to
                    the purchase price of the products.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Privacy Policy</b>: Your
                    personal information is collected and used according to our
                    Privacy Policy, which is available on our website.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Contact Us</b>: For inquiries
                    or issues regarding your order, please contact us at
                    <a
                      href="mailto:Luna.llc8@gmail.com"
                      className="text-blue-500 underline"
                    >
                      {" "}
                      Luna.llc8@gmail.com
                    </a>{" "}
                    or
                    <a
                      href="tel:+818059601614"
                      className="text-blue-500 underline"
                    >
                      {" "}
                      +81 80 5960 1614
                    </a>
                    .
                  </p>
                </li>
                <li className="mb-4">
                  <p className="md:text-xl">
                    <b className="font-extrabold">Modifications</b>: We reserve
                    the right to modify these Terms and Conditions at any time.
                    Changes will be posted on this page with the updated date.
                  </p>
                </li>
              </ol>
              <div className="py-4 space-y-2 border-y border-gray-800 dark:border-gray-800">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Delivery and Returns:
                </h1>
                <p className="md:text-xl md:w-1/2">
                  Delivery times and fees vary depending on your location.
                  Shipping costs and delivery times are calculated at checkout
                  based on the destination.
                </p>
                <p className="md:text-xl md:w-1/2">
                  {" "}
                  We accept returns within 14 days of purchase, provided the
                  items are unused and in their original condition. Some
                  exclusions may apply.
                </p>
              </div>
              <div className="py-4 space-y-2 border-b border-gray-800 dark:border-gray-800">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Care and Cleaning:
                </h1>
                <p className="md:text-xl md:w-1/2">
                  To ensure longevity, follow the care instructions provided
                  with each item. Avoid exposure to harsh chemicals, and store
                  clothing in a cool, dry place when not in use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
