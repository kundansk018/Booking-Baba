"use client";

import Image from "next/image";
import bus1 from "../../../../../public/image/bus1.jpg";

const Invoice = () => {
  return (
    <div className="px-52  -mt-16 ">
      <div className="contenttable border border-gray-400 bg-white p-8 my-20 mx-auto w-3/4">
        <div className="mb-8 text-center text-2xl ">Booking Baba</div>
        <div className="border-4 border-gray-300 rounded p-6 mb-8">
          <div className="flex items-center">
            <Image
              // src="data:image/png;base64,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"
              src={bus1}
              alt=""
              className="w-14 h-14 mr-4"
            />
            <div>
              <p className="font-light text-base text-gray-700">
                Hi Bhushan Jadhav,
              </p>
              <p className="text-md text-base font-bold text-gray-700">
                Congratulations ! Your bus reservation is{" "}
                <p className="text-lg">
                  <a className="text-[#28a745]">booked </a>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-lowercase">From:</p>

            <p className="font-light">Mumbai</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">To:</p>

            <p className="font-light">Surat</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Date of Journey</p>

            <p className="font-light">07/11/2019</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Reporting Time:</p>

            <p className="font-light">8:50 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Departure Time:</p>

            <p className="font-light">8:50 PM</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Ticket ID</p>

            <p className="font-light">8:50 PM</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Passenger Name</p>

            <p className="font-light">Mr. Neil Patel</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Seat</p>

            <p className="font-light">16</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Ticket PNR</p>

            <p className="font-light">5977747-4444152</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Travels</p>

            <p className="font-light">AK Tour & Travels</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Bus Type</p>

            <p className="font-light">Multiaxel Volvo AC Sleeper</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">
              Boarding Point Address
            </p>

            <p className="font-light">
              {" "}
              Opp, National Bank, Near bus Stand. Mumbai.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 rounded px-5 py-6">
            <div className="flex justify-between">
              <p className="font-bold text-base text-gray-700">Total Fare:</p>
              <p className="font-bold text-base text-gray-700">$350.00</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center pt-10 ">
          **Always carry ticket print out and your ID proof while traveling.
          <hr className="my-4 " />
        </p>
        <div className="text-center mt-5">
          <p className="text-base text-gray-700">
            Any Questions? Get in touch with our 24x7 Customer Care team.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-base uppercase mt-4 inline-block"
          >
            Contact Customer Care
          </a>
        </div>
      </div>
      <hr className=" mt-10" />
      <div className=" -mt-10 border-collapse">
        <table className="w-full text-sm text-[#777777] font-normal">
          <tbody>
            <tr>
              <td align="center" className="tablepadding leading-20">
                Booking-Baba Template, 2705 N. Enterprise St Orange, CA 92865.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="flex justify-center">
          <tbody>
            <tr>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8kOSk0s87b81gtTc5kSmS8PaK_rN1qf5o-XsFJc&s"
                    width="32"
                    height="32"
                    alt="Loading FB Image"
                  />
                </a>
              </td>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c"
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQYHAwQFAv/EADsQAAEEAQEEBgcGBgMBAAAAAAEAAgMEBREGITFBEhNRcYGRIjJSYWKhsQcUI0LB0RUWNJPh8CRTcjP/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQMEBQIG/8QALxEAAgICAAQDBwQDAQAAAAAAAAECAwQRBRIhMRNBUTJhcZGhsdEUIkLwFTPhI//aAAwDAQACEQMRAD8AvFAAgAQAIA5WX2gxuIGlucdbpqImek8+HLxUc7Yw7lmjEuv9hdPXyIfktv7byW46rHC325vTd5cB81WllN+yjXp4PBf7Jb+HQj9vaHMWyTLkbGh/Kx3QHy0UDtm+7NCvCx4doI58k80h1knlefieSo9tlhQjHsvoeWzSxnWOV7T8LiEbY3FPujdrZ3LViDDkbI05GQuHkV2rZrsyGeJRP2oL5Hdx+3+SgIF2GG0ztHoO894+SmjlSXcoW8Hpl7DafzRL8NtXisq5scc3U2Dwhm9EnuPA+CswvhMycjh99HVra9Ud0FTFEaABAAgAQAIAEAY5po4InyTPayNg1c5x0AHek3ocYuT0l1K/2i22lnLq2HcY4uBsEek7/wA9g9/HuVO3Jb6QN/E4VGK57ur9PyQx7i5xc4lznHUknUkqobCWlpCQMSBgkAimMSQAUAeUDJTs7tncxhZBeLrVThvPpx9x5j3FWK8iUej6oy8vhdd25V9JfRll0L1bIVWWKcrZYn8HD6HsK0IyUltHm7ap1S5JrTNlMjBAAgAQBjnmjghfLK9rI2DpOc46AAc0N6HGLk0kupVm1W0kuanMMJLKLD6LOBkPtO/ZZ11zm9LseowcGOPHml7X2+BH1AaAkACBiQAFIBJjEkAFAHlAwQB1dns7ZwVwSwkvhcdJYSdzx2+4+9SV2Ot7RVy8SGTDll38mW9jb9fJUo7dSQPikGoPMe49hC04yU1tHkbap0zcJrqjaXRGCABAFd7f50zznFVX/hRnWcg+s72e4fXuVLJt2+RHoOF4ijHxpd32/JDFUNkSABACQMEgEmAkDBIBIGJAAgAKAJFsVn3YfIiGd/8AwrDgJNeDHcnfof8ACnot5JafZmdxLD/UV80faX19xbQOq0jyg0AcrabKDEYea0NOt06MQPN54fv4KO2fJHZZw8fx7lDy8/gU85xc4uc4ucTqSeJKyz16SXRHlAwKAESgZv1MLlLjQ6vQnc08HFvRB8Su41zl2RXsy6K+kpr+/A2JNmc1G3U4+Qj4XNd9Cn4FnoRriGK/5o5U8MteTq7EUkUnsSNLT5FcNNdy3CcZrcXtGNcnQFACKBiQAIARQMSQFr7AZc5HDCCZ2s9TSNxPEt/KfLd4LSx7OeGn3R5TimN4N3NHtLr+ST6qwZuyuvtKvmS/WoNd6MLOsePiduHkB81Sypbaieh4PTqErPXp8iGqobAIGZalWe7Zjr1oy+WQ6NA+pTjFyekcWWRqi5zekix8FsxTxbGyStFi3uJkeNQ0/COXfxWhXRGHfueYy+I2XvUekf73O7vU5nhvCANe9RrX4DDcgZKw+0N47jyKUoqS0ySq2dUuaD0yp81DTq5Sevj7JnhYdA48jzbrz07Vl2QUZNJnrcS6dtSlYtM0lGWxIAEACAEgYkASPYG+aW0UTCdI7IMTu/iD5jTxU+PLVi95ncVp8TGb811LbWkeSKb2nsm1tBfkJ1AmLG9zd36LLte5tnssKvkx4L3fc5ajLIIAsLYTFtq477/I38az6pP5Y+Xnx8lfxq9R5n5nm+LZLnb4S7R+528xk6+IoSXLZPRbua1vF7uQCnlJRW2ZtNUrZqESsMvtVlsnK7Ww+tDyhgcWgD3nif8AdypTulI9BTgVVrqts0a+TyFaQPgv2mOG/wD+pI8juK4U5LzLEseqa04r5HZvbZ5O5ivuTugyV26WxHuc9vZpyPaR8l28iTjoqV8Nqhbz+XoRsbuG7RQGmjMx2u7muWiaL2NI6J5s9sxir+Eq2rMUjpZGkuIlIHrEcPBXaqISgmzz2ZxHIqvlCL6L3EDfp1j2jgHEKnLozfhLmimeSkdggD3BM6vPFOw6OieHg+8HVNPT2czipxcX5l2fxir7S1PER4z9PMpqw8yWZpDvL5HO8ystvbPYQXLFL4GNI6EdSCBx5JjLnrQtgrxQsGjY2BoHuAWulpJHhpyc5uT8yvPtMuPkytalr+HDD1mna5xI+jR5lVMiXVI2uFVpQc/VkPVY1SfbPbIYvI4arcsGz1srSXdCQAcSOxW66ISimzGyeIXVWyhHWkdH+Q8N7Vv+6P2Xf6aBD/lcj3fL/ofyJhvat/3R+yX6aAf5XI93y/6QnarGw4jMS1axf1QY17emdTvH7gqrdBQlpGzg3yvqU5dyVU9h6dipBM67ZBkja8gBug1GvYp1ixa3soT4xbGTjyrp8SU4uizG4+GlG9z2xAgOcN53k/qrEIKEeVGTfc7rHY1rZGnbAUnPc779a1JJ9Vv7KB4sX5mlHjFkVrlX1IRlKzaeStVWOc5sMpYHO4nRU5x5ZNG9j2u2qM35msuCcR3hAHQ/i9r2134jIP09foYJmmOaRh4teW+RXL7nceqTPCDoTidDpx5IBIuerM2xVhmYdWyMDwe8LXT2kzw04uEnF+RX32mUnx5Std0PVzQ9UTyDmkn6H5KpkrTTNrhVicJQ9OpDgqxq6J3s/tljcbhqtOxFZMkTSHFjARxJ7VarvjGKTMfJ4fdbdKcdaZ1a+3GMs2IoIq9wySvDGjqxxJ07VIsiDeitLht8YuT1pEmU5nlWbeStl2nsAHXq442Hy1/VZ+Q//Q9NwuPLjr3s14tqM5FEyOPIOaxjQ1o6tm4DwXKvsXTZK+H48ntxLI2Zsz3cDTs2pOsme0lztANfSI5K9VJygmzzuZXGu+UI9l+EV5JtVnRK8DIvADiNBEzt/wDKpSyLE+56CHDcZxW4/c5E80tmeSed/TlkcXPcQBqfBQtuT2y/XBVxUY9keAVySDQMz/c7H/WU+VnHiR9Te2irmtnb8WmgE7iO4nUfIru1am0QYk+eiEvcjnKMsAgCwtgss2zQ/h0rtJq/qA/mZ/g7vJaGNZuPL6Hm+LYzhb4q7S+53stja2WoSU7QPQfvDm8WkcCPep5RUlpmbTdKmanErLLbJZbHSO6Fd1qD8ssDS7XvbxH+71RnTOL9T0NGdTYur0/RnPr4jJzvDIsdbLj2wuHzIXChJ+RYlfTFbcl8yc7IbJPx0zb+S6P3lo/CiB1EfvJ5nTy+lqmnl/dIxs7iCtj4dfbzfqSq5aipVJrVh3RiiaXOPuCsN6W2ZkIOclGPdlL3bUl27Pbl9eeQvI7NeA8llzlzSbPYU1qutQXkYlwTEgx21+Tx1GKnXjqmKIEN6xjieJO/R3vU8ciUY6Rn3cMqusdjb2zgElznOPEkncoH1NGK0tAg6BID3GwyvbG0aue4NHedyNb6D3pbfkXH/L0Hu8lp+EeP/WSIb9pNIwZiG2B6FmPQn4m7j8iFWyo6ls2eD281Lh5p/ciOqqmsGqAMlW1NTsx2K0hjljOrXBdRk4vaOLKo2wcJraZY2B2spZJrYrTm1rfDoPOjXn4T+nHvWhVfGfxPL5fDrKHtdY+v5JCpzPHrqgDWvXquPgM96eOGMc3nee4c/BKUlFbZ3XXOx6gtsrXavaZ+beK9Zro6LHagO3OlPIu93YFRuu5+i7HosHB8D98/a+xHlXNMaQAg6QBADQMEhnd2Kom9tJVaRqyEmZ/c3h8yFNRHmmijxG3w8aT830+ZcOvvWls8h0OLtliTlcJLHE3pTxfixDmSOI8RqFFfDngX+H5HgXpvs+jKfG8LMPXAgAQAnNDho4ahAmtmxWy2Ux7ehUyFiNnJofq0eB1CmjbNdmUrcOmT3KKM79p89I3R+Vn0+ENb9AF07rPUiWBjL+BzZpZbEhlsSySye3I8uPmVE5N9y1CuMFqK0eQkSAkMYQMEDAIGNAAkNFnfZviTUxb78rdJLfqa8oxw8+Pkr+NDUeZ+Z5ni2Qp2quPaP3JerRk6PZGqAKs27wRxmQNyuz/iWXa7uEb+Y7jxHis7Ir5ZbXZnqOF5fjV+HJ/uX1RFlXNQEACAAgEaFAa2YHN6PcukyJx0CABAxpDBADQMaBgkB2NlsJJnMoyHQitHo+d/Y3s7z/nkpaa/ElryKmblLGq5vN9v77i442NjjbHG0NY0BrWjgAOAWmlroeQbbe2ekxGRAGtkKUGQpy1bUYfFINHD9R70pRUlpklVkqpqcO6Kg2iwVnBXOpm1fC/fDMBueP0PuWXZW63pnrsTLhkw5o9/NHKUZaAlAxIAR0I0QIxkaJkbjoSYDQMEhoaBjSA3MTjbOWusqU2dJ7uJPBg5knsXUIOb0iK++FEHObLgwOHr4XHsq1xqfWkkPF7uZK1K4KC0jyOTkzyLHOR0V2VwQBkQAIA1clj62SqSVbkQkieOB5HtB5FcyipLTJKrZ0zU4PTKu2k2SuYdzpoGusUuPWNHpMHxAfUfJZ9tEodV1R6fD4lXkLll0l9/gRtQGkCABACQI8FuiZw0CYDSGHBIZ2dn9nL+clHUs6usD6dh49Ed3aVLXTKzt2KmVm1Yy/d1fp/exaeEw1PC1BBTZvO+SR3rPPaT+i0YVxgtI8vk5NmRPmmzpLsrggAQBkQAIAEAIjVAEYzexOMyJdLXH3OweLom+i7vbw8tFXsx4T7dDSx+KXVftl+5e/8AJCslsVmqRJjgbaj9qB2p8WnQ+Wqqyx7I+Wzap4pjWd3p+84E8M1dxbYhkicOUjC0/NQtNdy/GUZrcXsxg68EjoDw3oATI3yODYmOeTwDW6n5Jrr2OJaj1Z28dslmrxBbUMDD+ewegPLj8lLGiyXkUreIY9f8tv3Eww2wlGp0Zci83JR+TToxjw5+PkrUMaK6y6mRkcWtn0rXKvqS6NjY2NZG1rWNGga0aADuVhLRlNtvbMiYgQAIAEAZEACABAAgBFAAmI5+b/onKOzsWMb2ioM3/XPWZZ3PX4/+tGvR/qo+9cx7klnsstvZr+j8Fp1HkMz2jq/upWVF2AIEj0EDGkB6TASABAH/2Q=="
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
              <td className="pr-10 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrphKLPPaxvj4H3JQmu6twIizqAo5qkKti9xerYaUfvg&s"
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm text-gray-700 font-normal">
          <tbody>
            <tr>
              <td className="tablepadding text-center leading-20 pt-10 pb-20">
                Copyright © 2023 Booking-Baba All Rights Reserved.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
