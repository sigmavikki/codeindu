"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RazorpayCloneUPI = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(900); // 15 minutes
  const [showConfirm, setShowConfirm] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [step, setStep] = useState<"form" | "success">("form");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "form") {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) clearInterval(interval);
          return prev - 1;
        });
      }, 1000);
      const confirmTimeout = setTimeout(() => setShowConfirm(true), 180000);
      return () => {
        clearInterval(interval);
        clearTimeout(confirmTimeout);
      };
    }
  }, [step]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleVerify = () => {
    setStep("success");
    setTimeout(() => router.push("/dashboard-students"), 10000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-4 shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="col-span-1 bg-[#2a3194] p-4 text-white flex flex-col justify-between">
          <div>
            <div className="font-bold text-lg">CodeIndu</div>
            <div className="text-xs text-white/70 mt-1">
              Razorpay Trusted Business
            </div>
          </div>

          <div className="mt-8">
            <div className="text-sm text-white/70 mb-1">Price Summary</div>
            <div className="text-2xl font-semibold">₹49</div>
          </div>

          <div className="mt-8 text-sm">
            Using as <br />
            <span className="font-medium">+91 73803 65295</span>
          </div>
          <div className="text-xs text-white/40 mt-auto pt-10">
            Secured by Razorpay
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-3 bg-white p-6 space-y-6">
          {step === "form" ? (
            <>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Payment Options</div>
                <div className="text-xs text-gray-500">
                  🕒 {formatTime(timer)}
                </div>
              </div>

              <div className="flex space-x-6">
                {/* Payment Modes List */}
                <div className="w-1/4 space-y-4 text-sm">
                  <div className="font-bold">Recommended</div>
                  <div className="bg-[#f3f3f3] rounded px-3 py-2 flex items-center space-x-2">
                    <span className="text-[#17f033] font-bold">●</span>
                    <span>UPI</span>
                  </div>
                  <div className="text-gray-400">Cards</div>
                  <div className="text-gray-400">Netbanking</div>
                  <div className="text-gray-400">Wallet</div>
                  <div className="text-gray-400">Pay Later</div>
                </div>

                {/* UPI Panel */}
                <div className="w-3/4 space-y-4">
                  <div className="text-sm text-gray-500">UPI QR</div>
                  <div className="bg-pink-50 p-4 rounded border border-pink-100">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/courses/enroll/qrcode.jpeg"
                        width={160}
                        height={160}
                        alt="QR"
                        className="w-70 h-70"
                      />
                      <div className="mt-2 flex gap-2">
                        <Image
                          width={24}
                          height={24}
                          src="/icons/gpay.svg"
                          className="w-6"
                          alt="gpay"
                        />
                        <Image
                          width={24}
                          height={24}
                          src="/icons/phonepe.svg"
                          className="w-6"
                          alt="phonepe"
                        />
                        <Image
                          src="/icons/paytm.svg"
                          width={24}
                          height={24}
                          className="w-6"
                          alt="paytm"
                        />
                        <Image
                          src="/icons/upi.svg"
                          width={24}
                          height={24}
                          className="w-6"
                          alt="upi"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Scan the QR using any UPI app
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    Pay with UPI ID / Number
                  </div>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@okhdfcbank"
                    className="w-full p-3 border rounded text-sm"
                  />

                  {showConfirm && (
                    <button
                      onClick={handleVerify}
                      className="bg-black text-white w-full py-3 rounded text-sm font-semibold"
                    >
                      Verify and Pay
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                ✅ Payment Successful
              </h2>
              <p className="text-gray-500 text-sm">
                Redirecting to dashboard in 10 seconds...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RazorpayCloneUPI;
