import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Example() {

    const navigate = useNavigate();
    const handleBuyNow = () => {
        toast.success('Thank you for shopping!', { position: 'top-center' });

        navigate("/orderSuccess");
      };
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WELCOME TO PAYMENTS PAGE</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
  <h3 className="text-2xl font-bold tracking-tight text-gray-900"></h3>
  <div className="mt-8">
    <h4 className="text-sm font-semibold leading-6 text-indigo-600">How would you like to pay?</h4>
    <div className="mt-4">
      <label className="inline-flex items-center">
        <input type="radio" name="paymentMethod" className="form-radio h-5 w-5 text-indigo-600" />
        <span className="ml-2 font-bold">Cash on Delivery</span>
      </label>
    </div>
    <div className="mt-4">
      <label className="inline-flex items-center">
        <input type="radio" name="paymentMethod" className="form-radio h-5 w-5 text-indigo-600" />
        <span className="ml-2 font-bold">Credit/Debit Card</span>
      </label>
    </div>
    <div className="mt-4">
      <label className="inline-flex items-center">
        <input type="radio" name="paymentMethod" className="form-radio h-5 w-5 text-indigo-600" />
        <span className="ml-2 font-bold">Netbanking</span>
      </label>
    </div>
  </div>
</div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Total Amount</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{localStorage.getItem('totalPrice')}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  onClick={handleBuyNow}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy Now
                </a>
                <p className="mt-6 text-xs font-semibold leading-5 text-yellow-600">
                  Invoices and Receipts Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
