import Nav from "../navbar/Nav";
import banner from "./assets/linkus-banner.webp";

const VoIP = () => {
  return (
    <>
      <div
        className="h-[380px] md:h-[480px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black/20 w-full pt-[96px] absolute top-0">
          <Nav />
        </div>
        <h2 className="text-white text-[clamp(30px,3.2vw,55px)] font-semibold px-4">
          VoIP FAQ for Desktop and Mobile App
        </h2>
      </div>

      <div className="w-full">
        <div className="w-full max-w-[1280px] p-4 py-20 mx-auto">
          <div className="">
            <p className="leading-7">
              Welcome to <strong>Linkus UC Clients</strong>. With Linkus, the
              features of a desk phone are accessible on your web browser,
              mobile device, and desktop. Available using any browsers,
              Microsoft Windows, macOS, iOS, and Android, Linkus makes real-time
              business communication easy across multiple devices, providing
              presence, voicemail & recording lists, click-to-call, call pop-up,
              contacts, call logs, and more business-enhancing features.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold mb-1 mt-8 text-lg">
              Extension Information
            </h2>
            <p className="leading-7">
              Extension Number: (you will have a 3 or 4 digit extension number)
            </p>
            <p className="leading-7 mt-4">
              Voicemail PIN: (your initial PIN is provided to you during your
              onboarding experience, if you do not have this please email us at
              <a href="mailto:support@futuredigital360.com">
                support@futuredigital360.com
              </a>{" "}
              or you can text us at <a href="tel:4808096334">480-809-6334</a>
            </p>
            <p className="leading-7 mt-4">
              You can either press *2 and the extension number on the dial pad
              or log in to Linkus UC Clients to listen to retrieve your
              voicemails.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="font-semibold mb-1 mt-8 text-lg">
              Linkus Mobile Client
            </h2>
            <ul className="flex flex-col p-4 gap-2 mt-2 list-decimal">
              <li>
                <p>
                  Download Linkus Mobile Client by scanning the QR code below or
                  from your APP Store or Google Play.
                </p>
              </li>
              <li>
                <p>
                  Open Linkus Mobile Client and log in via the login link or by
                  scanning the QR code
                </p>
              </li>
              <li>
                <p>
                  Linkus will automatically detect the login account
                  information, please confirm it and click OK to log in.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold mb-1 mt-8 text-lg">
              Linkus Desktop Client
            </h2>
            <ul className="flex flex-col p-4 gap-2 mt-2 list-decimal">
              <li>
                <p>
                  Download Linkus Desktop Client from{" "}
                  <a
                    href="https://image.yeastar.com/Yeastardownload/Linkus-desktop-win-setup.exe"
                    target="_blank"
                    className="text-blue-500"
                  >
                    https://image.yeastar.com/Yeastardownload/Linkus-desktop-win-setup.exe
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Copy the login link, open Linkus Desktop Client, and paste it.
                </p>
              </li>
              <li>
                <p>
                  Linkus will automatically detect the login account
                  information, please confirm it and click OK to log in.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoIP;
