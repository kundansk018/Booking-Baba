import React from "react";

const PaymentForm = () => (
  <div className="container mx-auto">
    <div className="py-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Payment Details</h2>
            <ul className="flex space-x-2">
              <li>
                <a
                  href="#"
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs font-bold text-gray-700"
                >
                  <img alt="Visa" src="" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs font-bold text-gray-700"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs font-bold text-gray-700"
                >
                  American Express
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs font-bold text-gray-700"
                >
                  Mastercard
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4">
                <form>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block mb-2 text-gray-800 text-sm font-bold">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Card Number"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block mb-2 text-gray-800 text-sm font-bold">
                        Expiry Date
                      </label>
                      <div className="flex">
                        <div className="w-1/2 pr-2">
                          <input
                            type="text"
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="MM"
                          />
                        </div>
                        <div className="w-1/2 pl-2">
                          <input
                            type="text"
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="YY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block mb-2 text-gray-800 text-sm font-bold">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="CVV"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block mb-2 text-gray-800 text-sm font-bold">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Card Holder Name"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
                <div className="bg-gray-100 rounded p-4">
                  <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Product 1</span>
                    <span className="text-gray-800">$19.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Product 2</span>
                    <span className="text-gray-800">$29.99</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">$49.98</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label className="ml-2 text-gray-700 text-sm">
                      Save my payment information
                    </label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label className="ml-2 text-gray-700 text-sm">
                      Subscribe to the newsletter
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Pay Now
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    By clicking the button above, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PaymentForm;
