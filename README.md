<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/The-DigitalAcademy/converter-pdf-png">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Converter PDF/PNG</h3>

  <p align="center">
    A lightweight PDF to PNG converter that works on a REST API design.
    <br />
    <a href="https://github.com/The-DigitalAcademy/converter-pdf-png"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.cosm/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/The-DigitalAcademy/converter-pdf-png/issues">Report Bug</a>
    ·
    <a href="https://github.com/The-DigitalAcademy/converter-pdf-png/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many PDF to Image Converters available on GitHub or NPM; however, I didn't find one that really suited my needs so I created this lightweight, utility project as a convenient solution.

Here's why:

- PDF is widely used as the preferred document type for JS Reports and other reporting tools.
- Converting PDF in javascript is not straioght forward, and requires an aggregation of many different JS libraries.
- Project exposes the conversion process to a user by way of a REST API of the "FRONTEND" forms.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![Node][Node.js]][Node-url]
- [![Bootstrap.com][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- nvm - 0.39.3

- npm - 9.5.1

  ```sh
  npm install npm@latest -g
  ```

- node - 18.16.0
  ```sh
  nvm use 18.16.0
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/The-DigitalAcademy/converter-pdf-png
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Enter your CONFIG in `.env`

   ```env
   PORT=3030
   JSREPORT_URL=https://f869-154-0-10-27.ngrok-free.app/api/report
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

1. Frontend Usage

http://localhost:3030/

![Alt text](<Screenshot 2023-09-04 at 09.13.15.png>)

<h1>Available Converters</h1>

Submit Form Data

![Alt text](<Screenshot 2023-09-04 at 09.19.35.png>)

Form Data is retrieved and used to make a request to JS Report for the relevant Template.

Prerequisites:
Template Name as per JS Reports
Micro-App Name
Micro-App **Display** Title
Micro-App **Display** Sub-Title
Micro-App **Display** Description
Micro-App **Display** Screenshots
Micro-App **Display** logo

**DISPLAY refers to the details that will appear on the resulting templates**

![Alt text](<HelloWorld (24).png>)

Submit PDF URL

![Alt text](<Screenshot 2023-09-04 at 09.19.43.png>)

Submit PDF File

![Alt text](<Screenshot 2023-09-04 at 09.19.49.png>)

2. Postman Usage

<span>POST</span>

[Base-URL]/converter/pdf-png

Form Data

```json
{
  "template": {
    "name": "facebook-template"
  },
  "data": {
    "title": "Africaglam",
    "para2": "Service for the African woman",
    "para3": " dedicated to uplifting and empowering African women across the continent.",
    "imagePaths": {
      "image1": "https://strapiayoba.s3.af-south-1.amazonaws.com/image1_6713381f3f.jpeg?updated_at=2023-08-21T12:19:09.642Z",
      "image2": "https://strapiayoba.s3.af-south-1.amazonaws.com/image2_aaf304338c.jpeg?updated_at=2023-08-21T12:19:31.982Z",
      "logo": "https://strapiayoba.s3.af-south-1.amazonaws.com/African_American_Woman_PNG_Pic_7359b53a6b.png"
    }
  }
}
```

URL

```json
{
  "url": "https://strapiayoba.s3.af-south-1.amazonaws.com/blob_48963a1783.pdf?updated_at=2023-08-22T12:08:29.777Z"
}
```

File Form-Data

![Alt text](<Screenshot 2023-09-04 at 09.43.06.png>)

3. Ayoba Developer Portal

The Developer Portal Marketing tab makes use of the converter's REST API to provide users with the desired JS reports, converted to an Image/PNG.

![Alt text](<Screenshot 2023-09-04 at 10.17.12.png>) ![Alt text](<Screenshot 2023-09-04 at 10.17.21.png>)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Init Repo
- [x] Add server.html
- [x] Add server.js
- [x] Integrated pdf-to-png-converter
- [x] Add Multer for Form-Data Processing
- [x] Add Docker Containerization

See the [open issues](https://github.com/The-DigitalAcademy/converter-pdf-png/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Node.js]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Node-url]: https://getbootstrap.com
[npm]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[npm-url]: https://getbootstrap.com
[JS-Report]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[JS-Report-url]: https://getbootstrap.com
