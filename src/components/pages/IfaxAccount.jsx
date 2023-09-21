import { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import Accordion from "../Accordion";
import "./styles.css";
import ifaxCover from "../../assets/services/KBcover.avif";

import img1 from "../../assets/ifax/account/img1.webp";
import img2 from "../../assets/ifax/account/img2.webp";
import img3 from "../../assets/ifax/account/img3.webp";
import img4 from "../../assets/ifax/account/img4.webp";
import img5 from "../../assets/ifax/account/img5.webp";
import img6 from "../../assets/ifax/account/img6.webp";
import img7 from "../../assets/ifax/account/img7.webp";
import img8 from "../../assets/ifax/account/img8.webp";
import img9 from "../../assets/ifax/account/img9.webp";
import img10 from "../../assets/ifax/account/img10.webp";
import img11 from "../../assets/ifax/account/img11.webp";
import img12 from "../../assets/ifax/account/img12.webp";
import img13 from "../../assets/ifax/account/img13.webp";
import img14 from "../../assets/ifax/account/img14.webp";
import img15 from "../../assets/ifax/account/img15.webp";
import img16 from "../../assets/ifax/account/img16.webp";
import img17 from "../../assets/ifax/account/img17.webp";
import img18 from "../../assets/ifax/account/img18.webp";
import img19 from "../../assets/ifax/account/img19.webp";
import img20 from "../../assets/ifax/account/img20.webp";
import img21 from "../../assets/ifax/account/img21.webp";
import img22 from "../../assets/ifax/account/img22.webp";
import img23 from "../../assets/ifax/account/img23.webp";
import img24 from "../../assets/ifax/account/img24.webp";
import img25 from "../../assets/ifax/account/img25.webp";
import img26 from "../../assets/ifax/account/img26.webp";
import img27 from "../../assets/ifax/account/img27.webp";
import img28 from "../../assets/ifax/account/img28.webp";
import img29 from "../../assets/ifax/account/img29.webp";
import img30 from "../../assets/ifax/account/img30.webp";
import img31 from "../../assets/ifax/account/img31.webp";
import img32 from "../../assets/ifax/account/img32.webp";
import img33 from "../../assets/ifax/account/img33.webp";
import img34 from "../../assets/ifax/account/img34.webp";
import img35 from "../../assets/ifax/account/img35.webp";
import img36 from "../../assets/ifax/account/img36.webp";
import img37 from "../../assets/ifax/account/img37.webp";

const topics = [
  {
    title: "How to Set Up a Company Fax Page on iFax",
    content: (
      <>
        <p>
          As a Professional user, here’s how you can create and customize a
          dedicated fax page for your account.
        </p>
        <ul className="list-decimal pl-8">
          <li>
            Go to iFax and log in to your account. You will be directed to the
            dashboard.
          </li>
          <li>
            Click Settings. The gear icon is located in the bottom left corner.
          </li>
          <li>
            Select Your Fax Page. You will see a window where you can add or
            revise the following fax elements:
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img1} alt="" />
        <ul className="list-disc pl-8 mt-6">
          <li>
            Company logo – Upload a JPEG or PNG file. You may also adjust the
            size of your logo.
          </li>
          <li>
            Page Title – Edit the page’s name and include your company or name.
          </li>
          <li>Subtitle text – Add your tagline or greeting to the sender.</li>
          <li>Fax number – Type in your fax number.</li>
          <li>Company – Type the name of your company.</li>
          <li>
            Toggle option for cover page – You may include the cover page
            automatically.
            <br />
            Preview of your dedicated fax page – See how the page looks like as
            a sender.
          </li>
          <li>
            Unique URL – The generated one is based on the company’s name (e.g.,
            Amplify Ventures has this link:
            https://ifaxapp.com/fax/amplify-ventures)
          </li>
          <li>
            Free for visitors – If you select this option, senders can fax you
            at no cost. Your iFax account will be charged based on the number of
            pages.
          </li>
          <li>
            Visitors will pay – If you select this option, senders will be
            charged based on the number of pages they’ve transmitted to your fax
            page.
          </li>
          <li>
            Save button – Click this to save and apply the edits and
            customization you made.
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img2} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="4">
          <li>
            Once you’re satisfied with the details on your dedicated fax page,
            click Save.
          </li>
          <li>
            Copy and paste the fax page URL on your web browser to view it.
          </li>
          <li>
            Share the link with your contacts, colleagues, suppliers, vendors,
            and clients. You can even add the URL to your email signature and
            social media channels. That’s how easy it is to create a dedicated
            fax page.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "How to Use Group Permissions",
    content: (
      <>
        <p className="text-lg font-bold">
          Assigning group permissions to a new user
        </p>
        <ul className="list-decimal pl-8 mt-6">
          <li>
            Go to the iFax web dashboard and log in to your Professional
            account.
          </li>
          <li>
            On the left panel, you will see the Settings icon on the bottom left
            of the dashboard. Click on it to open the Settings window.
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img3} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="3">
          <li>Click the Team and SSO tab.</li>
          <li>
            {" "}
            To add a user, click on Create New and fill out the fields with the
            required information (first and last name, email address, and job
            title).
          </li>
        </ol>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img4} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="5">
          <li>Select an assigned fax number</li>
        </ol>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img5} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="6">
          <li>
            Click on Select Group and choose the appropriate option. We’ll
            discuss this further in the next section.
          </li>
        </ol>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img6} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="7">
          <li>Click Save.</li>
        </ol>
        <p className="text-lg font-bold mt-6">Assigning a default group</p>
        <p className="mt-6">
          Simply click on Select Group and choose from the drop-down list of
          default groups.
          <br />
          They already contain a fixed number of permissions that are
          appropriate for the title. On the dashboard, you can see the number of
          permissions for each default group and the number of users.
        </p>
        <ul className="list-disc pl-8 mt-2">
          <li>Admin – 22 permissions</li>
          <li>Manager – 17 permissions</li>
          <li>Sender – 4 permissions</li>
          <li>Receiver – 4 permissions</li>
          <li>Sender+Receiver – 4 permissions</li>
        </ul>
        <p className="mt-6">Note: These default groups cannot be edited.</p>
        <p className="text-lg font-bold mt-6">Creating New Group Permissions</p>
        <p className="mt-6">
          If you think a team member or role requires a custom set of
          permissions, it’s best to create a new group.
          <br />
          Here’s how to do it:
        </p>
        <ol className="list-decimal pl-8">
          <li>Click the New Group button at the bottom right.</li>
        </ol>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img7} alt="" />
        <ol className="list-decimal pl-8" start="2">
          <li>Type in the new group name in the appropriate field.</li>
          <li>
            Tick the boxes for the permissions you want to include under each
            category (Account Management, Other Features, Inbound Workflow,
            Outbound).
          </li>
          <li>Click Save.</li>
        </ol>
        <p className="text-lg font-bold mt-6">Assigning admin access</p>
        <p className="mt-6">
          An admin has the highest number of permissions and unlimited access to
          reports and documents. This user has the following privileges and
          more:
        </p>
        <ul className="list-disc pl-8">
          <li>Finance and plan management</li>
          <li>Add port or change fax numbers</li>
          <li>View faxes sent by other users</li>
          <li>Delete faxes</li>
          <li>Email to fax</li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img8} alt="" />
        <p className="mt-6">
          When you click on Admin under the Account Management drop-down menu,
          the system will automatically tick the other boxes that are
          appropriate. As you can see, an admin has almost complete access to
          all features and files.
        </p>
        <p>
          Note: If you tick the Disable App Access (Web/Mobile) option, the user
          can restrict access to the iFax web browser or mobile app.
        </p>
      </>
    ),
  },
  {
    title: "How to edit or remove a team member from my fax account?",
    content: (
      <>
        <p>
          1. Navigate to Team from the left panel of your dashboard to make
          changes to team members in your fax account.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img9} alt="" />
        <p className="mt-6">
          2. Under the Users tab, click on the three dots on the right of the
          user’s name.{" "}
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img10} alt="" />
        <p className="mt-6">
          3. Select from the options: Edit if it’s necessary to modify the
          user’s information or Delete if you need to remove the team member
          from your account.
        </p>
      </>
    ),
  },
  {
    title: "How to add team members?",
    content: (
      <>
        <ul className="list-decimal pl-8">
          <li>
            On the dashboard, navigate to the left panel, then select Team.
          </li>
          <li>
            A window will pop up where you can see the settings for configuring
            your team under Team & SSO.
          </li>
          <li>
            Click on the Add user to add new members to your team. You can also
            select Add 365 user for Microsoft accounts.
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img11} alt="" />
        <ol className="list-decimal pl-8 mt-6" start="4">
          <li>
            Fill in the required details, such as the email address, name, job
            title, and fax number access.
          </li>
          <li>
            {" "}
            Assign permission for the team member by checking the boxes or
            selecting a group for the user. Click Save.
          </li>
        </ol>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img12} alt="" />
        <p className="mt-6">
          You now added a user for your fax account. The new member will receive
          an email to activate their iFax account and access the shared faxes
          with your team. Remember that if you need to add more users to your
          team, you must edit your plan or add licenses for only $16.66 per
          month for every user.
        </p>
      </>
    ),
  },
  {
    title: "How to Create Smart Folders on iFax and Sort Your Faxes",
    content: (
      <>
        <p>
          1. On your dashboard, click Folder located at the left side of the
          screen.
        </p>
        <p>2. Click New Folder.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img13} alt="" />
        <p className="mt-6">3. Type in the folder name.</p>
        <p>4. Click Save.</p>
        <p className="mt-6">
          Once the folder has been successfully created, you should be able to
          find it on the Folder section on your dashboard.
          <br />
          Now that your smart folder is ready, you can begin sorting out your
          faxes. You can move your faxes from your dashboard or email inbox to
          your smart folder.
          <br />
          There are two ways that you can go about it. Let’s walk you through
          each one:
        </p>
        <p className="mt-6 font-bold text-lg">Drag-and-drop method</p>
        <p className="mt-3">1. Select the fax you wish to move.</p>
        <p>2. Simply drag and drop the fax into the smart folder.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img14} alt="" />
        <p className="mt-6">
          3. A pop-up message will appear. Click Move Here to confirm the
          transfer.
        </p>
        <p className="mt-6 font-bold text-lg">Manual method</p>
        <p className="mt-6">
          1. Select the fax you want to transfer to the smart folder.
        </p>
        <p>
          2. Click the hamburger icon (three dots) on the right side of the fax
          transmission.
        </p>
        <p>3. Click Move to Folder.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img15} alt="" />
        <p className="mt-6">
          4. Select the smart folder where you wish to move the fax to.
        </p>
        <p>5. Click Move Here.</p>
      </>
    ),
  },
  {
    title: "How to Enable Fax Notifications on iFax",
    content: (
      <>
        <p>
          To enable fax notifications, you will need to set up your fax service
          to send alerts to your preferred device or email address. Here’s how
          to do it on iFax:
        </p>
        <p>1. Log in to your account.</p>
        <p>
          2. On your dashboard, go to Settings by clicking the gear button on
          your screen’s bottom left side.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img16} alt="" />
        <p className="mt-6">
          3. Go to Notifications, then proceed to Email Notifications.
        </p>
        <p>
          4. To enable notifications, simply select how you wish to be notified.
          You can select between email and push notifications. You may also
          choose both to ensure you never miss a fax.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img17} alt="" />
        <p className="mt-6">
          5. If you want to receive a copy of your fax in your email, enable
          Attach Fax.
        </p>
        <p>6. Don’t forget to click Save to lock in all your changes.</p>
        <p>
          Once you have set up and configured your notifications, you should be
          able to receive a real-time update every time you receive a
          transmission. In the same vein, this feature also allows you to keep
          track of outgoing faxes. You’ll receive a confirmation email about
          whether your message was successfully sent or not.
        </p>
      </>
    ),
  },
  {
    title: "How to setup your timezone",
    content: (
      <>
        <p>
          Setting the correct time zone can help ensure that your faxes will be
          delivered promptly. The time zone you selected will also affect the
          time and date shown on your transmission receipts. Therefore, you must
          configure this setting correctly.
        </p>
        <p>To do so, you will need to:</p>
        <ul className="list-decimal pl-8">
          <li>Go to your account settings.</li>
          <li>Click General, then select Preferences.</li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img18} alt="" />
        <p className="mt-6">
          3. Under Time Zone, scroll through the menu, then select your location
          or country.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img19} alt="" />
      </>
    ),
  },
  {
    title: "How to enable or disable the success message pop-up",
    content: (
      <>
        <p>
          By default, you will see fireworks right after sending a fax message.
          If you want to disable this graphical notification, simply go to your
          account settings and follow these steps:
        </p>
        <p>1. Navigate to General {">"} Preferences</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img20} alt="" />
        <p className="mt-6">2. Scroll down to Fireworks.</p>
        <p>
          3. Click the toggle switch next to Display fireworks after fax sent.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img21} alt="" />
      </>
    ),
  },
  {
    title: "How to set up faxes for automatic deletion",
    content: (
      <>
        <p>
          iFax has a setting that allows you to automatically delete outgoing
          and incoming faxes based on a set interval.
        </p>
        <p>Here’s how you can get it done:</p>
        <p>
          1. Go to your account settings by clicking the gear icon from the left
          panel of your dashboard.
        </p>
        <p>2. Select General {">"} Preferences.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img22} alt="" />
        <p className="mt-6">3. Scroll down to Auto-Delete.</p>
        <p>
          4. From there, set your preferred intervals for auto-deleting sent and
          received faxes.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img23} alt="" />
        <p className="mt-6">
          5. You can set the interval to 1 day, 7 days, 30 days, 90 days, or
          Never. The changes made will be automatically applied to your account.
        </p>
      </>
    ),
  },
  {
    title: "How to always include a transmission receipt",
    content: (
      <>
        <p>
          A transmission receipt serves as proof that your fax has been
          successfully delivered. With iFax, you can include or exclude a copy
          of the transmission receipt in the email confirmation message.
        </p>
        <p>Here’s how it works:</p>
        <p>1. Go to your account settings.</p>
        <p>2. Navigate to General {">"} Preferences.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img24} alt="" />
        <p className="mt-6">3. Go to the section for Fax Content.</p>
        <p>4. Click the toggle switch next to Include transmission receipt.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img25} alt="" />
      </>
    ),
  },
  {
    title: "How to Add a Custom Fax Cover Sheet on iFax",
    content: (
      <>
        <p>
          Customizing your fax cover pages is as easy as following these steps:
        </p>
        <p>
          1. Go to your iFax web dashboard. If you still need to start using our
          online fax service, you can sign up for a free account or get a 7-day
          trial of our Professional plan.
        </p>
        <p>2. Click the cog icon at the bottom-left menu.</p>
        <p>
          3. Navigate to General {">"} Preferences {">"} Fax Content.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img26} alt="" />
        <p className="mt-6">
          4. Click the toggle button next to the Cover Page option.
        </p>
        <p>5. Click Customize Cover Page to load the cover page editor.</p>
        <p>
          6. Scroll through the available templates and select the one that you
          like.
        </p>
        <p>
          7. Preformat the fields to include your company name, contact number,
          business address, etc.
        </p>
        <p>
          8. To add a logo, click the three dots icon at the top-right corner of
          the cover page. Click Add Logo.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img27} alt="" />
      </>
    ),
  },
  {
    title: "How to port over an existing number",
    content: (
      <>
        <p>1. Log-in to iFax</p>
        <p>2. Click on “add” next to the Fax Numbers</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img28} alt="" />
        <p className="mt-6">3. Select the “Port Existing Number” tab</p>
        <p>4. Fill out Porting and Billing Details</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img29} alt="" />
        <p className="mt-6">5. Upload copy of most recent bill</p>
        <p>6. Click on Submit</p>
        <p>
          The port over process from your current service provider typically
          takes 5-7 business days. During this period you will still be able to
          receive faxes under your current provider as it hasn’t been turned
          over to our system yet. Upon approval of request, an FOC date will be
          provided and can be viewed in the Fax number settings during which
          your number will be ported over to iFax. After this date, you will be
          able to receive faxes in iFax through your existing fax number.
        </p>
      </>
    ),
  },
  {
    title: "How to port a new fax number",
    content: (
      <>
        <p>1. Log-in to iFax</p>
        <p>2. Click on “add” next to the Fax Numbers</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img30} alt="" />
        <p className="mt-6">
          3. Select the Country Code, Area Code, and Fax Number of your
          preference
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img31} alt="" />
        <p className="mt-6">4. Click on “Add Number”</p>
        <p>You are now able to receive faxes through this number</p>
      </>
    ),
  },
  {
    title: "How to configure SSO in iFax",
    content: (
      <>
        <p>
          You can only set up SSO for your team if you have administrator
          access. Once you have set up your IdP, follow these steps to configure
          your iFax account for single sign-on:
        </p>
        <p>1. Log in to your iFax account. Go to Settings {">"} Team & SSO.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img32} alt="" />
        <p className="mt-6">
          2. Under Team & SSO, go to the SSO tab and activate Single Sign-on.
        </p>
        <p>
          3. To configure SAML, get the details you need to provide from your
          IdP, like Google, Okta, and Azure. Enter the Login URL, SMAL
          certificate, and logout URL. Click Save.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img33} alt="" />
        <p className="mt-6">
          4. If you enter valid credentials, a snackbar will appear that says
          SSO configuration is saved. If your details are invalid, an error
          message will appear.
        </p>
        <p>
          5. When you successfully configured SSO to your account, your team
          will receive an email notification that SSO has been enabled.
        </p>
      </>
    ),
  },
  {
    title: "How to Bulk Upload Contacts for Fax Broadcasts",
    content: (
      <>
        <p>
          With iFax, you can add contacts manually or import them in bulk. Let’s
          say you have a long list of campaign subscribers. To add them to your
          broadcast list in one go, you need to follow these steps:
        </p>
        <p>
          1. Log in to your iFax web account. If you are not yet an iFax user,
          simply sign up for free or pay for a subscription.
        </p>
        <p>2. On your dashboard, go to Tools {">"} Broadcast Fax.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img34} alt="" />
        <p className="mt-6">
          3. On the lower right of the screen, click New Broadcast List, then
          select Upload CSV.
        </p>
        <p>
          4. Click Choose File and select the CSV file you want to upload from
          your local folder. Select Import.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img35} alt="" />
        <p className="mt-6">
          5. Label your new broadcast list. Review the data you uploaded. Our
          import tool will automatically check if the fax numbers listed are
          valid.
        </p>
        <p>
          6. If there are any invalid numbers, you must update them manually
          before you can click Save.
        </p>
        <p>A few things to remember:</p>
        <ul className="list-disc pl-8">
          <li>
            CSV stands for comma-separated values. You can export this file from
            document applications that can store data in tabular form, like
            Microsoft Excel, Google Sheets, and LibreOffice Calc. You can only
            upload one CSV file at a time.
          </li>
          <li>
            You should always include the area code, three-digit prefix, and at
            least four unique digits when listing fax numbers.
          </li>
          <li>
            If you are fax blasting to an international audience, always include
            the country codes without the +. Follow this format: 1 (314)
            123-4567
          </li>
        </ul>
        <p className="mt-6">
          When importing contacts in bulk, you must ensure that the CSV fields
          are in the correct order starting with the fax number, first name, and
          last name. If you want to add custom fields for email addresses and
          phone numbers, you must place them after the last name.
        </p>
        <p>
          Note that you can only add up to 10 custom fields. Otherwise, the
          exceeding fields won’t show up, and you’ll have to redo your upload.
        </p>
      </>
    ),
  },
  {
    title: "How to add a customs field to a broadcast list",
    content: (
      <>
        <p>With custom fields can create broadcast lists with these fields:</p>
        <ul className="list-disc pl-8">
          <li>first name</li>
          <li>last name</li>
          <li>fax number</li>
          <li>location</li>
          <li>age</li>
          <li>gender</li>
        </ul>
        <p className="mt-6">Here’s how to do it:</p>
        <p>1. Go to Tools {">"} Broadcast Fax.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img36} alt="" />
        <p className="mt-6">
          2. Click New Broadcast List, then choose between the two available
          options. You can import a CSV file of your existing contacts or create
          a new list from scratch.
        </p>
        <p>
          3. Label your new broadcast list and fill out the standard fields with
          the required details.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img37} alt="" />
        <p className="mt-6">
          4. Click Add Field. Enter the information that you’d like to include.
          You can enter specific details like email address, location, or
          organization.
        </p>
        <p>5. Click Save to apply the changes.</p>
        <p>
          Note that this feature is only available if you subscribe to iFax Pro.
        </p>
      </>
    ),
  },
];

const IfaxAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="relative w-full h-[600px] ">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={ifaxCover}
          alt="knowledge base cover"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-white text-center">
            <motion.h1
              className="font-bold mb-4 text-6xl text-green-400 "
              id="title"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Knowledge Base
            </motion.h1>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1150px] m-auto py-12 xl:py-20 px-4">
        <h1 className="text-2xl font-bold">
          Topics: Account, Team, and Number Setup and Configuration
        </h1>
        <ul className="mt-10 flex flex-col gap-4">
          {topics.map((item, index) => (
            <Accordion
              key={index}
              item={item}
              index={index}
              toggleAccordion={() => toggleAccordion(index)}
              activeIndex={activeIndex}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default IfaxAccount;
