<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slot availibility checker</title>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/index.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Slot Availibility Checker</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="https://apisetu.gov.in/"><span class="glyphicon glyphicon-user"></span> API Setu</a>
                    </li>
                    <li><a href="https://selfregistration.cowin.gov.in/"><span
                                class="glyphicon glyphicon-log-in"></span> Registration</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container" id="content">

        <!-- Jumbotron Header -->
        <div class="jumbotron home-spacer" id="products-jumbotron">
            <h1>Here You Can Check Slot Availibility by District ID</h1>
            <p>We have all over INDIA'S District ID's</p>

        </div>
        <hr>
        <div class="id">
            <a href="ID_Excel_File.htm" class="ID"><span class="glyphicon glyphicon-circle-arrow-right">Check your
                    District ID here<span class="glyphicon glyphicon-circle-arrow-left"></span></span></a>

        </div>
        <hr>

        <div class="input">
            <center>
                <div id="banner_content">
                    <h1>Check Slot Availibility</h1>
                    <br>
                    <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">DISTRICT ID</button>
                        <div id="myDropdown" class="dropdown-content">
                            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
                            <a> 242 Bokaro </a>
                            <a> 245 Chatra </a>
                            <a> 253 Deoghar </a>
                            <a> 257 Dhanbad </a>
                            <a> 258 Dumka </a>
                            <a> 247 East Singhbhum </a>
                            <a> 243 Garhwa </a>
                            <a> 256 Giridih </a>
                            <a> 262 Godda </a>
                            <a> 251 Gumla </a>
                            <a> 255 Hazaribagh </a>
                            <a> 259 Jamtara </a>
                            <a> 252 Khunti </a>
                            <a> 241 Koderma </a>
                            <a> 244 Latehar </a>
                            <a> 250 Lohardaga </a>
                            <a> 261 Pakur </a>
                            <a> 246 Palamu </a>
                            <a> 254 Ramgarh </a>
                            <a> 240 Ranchi </a>
                            <a> 260 Sahebganj </a>
                            <a> 248 Seraikela Kharsawan </a>
                            <a> 249 Simdega </a>
                            <a> 263 West Singhbhum </a>
                            <a> 270 Bagalkot </a>
                            <a> 276 Bangalore Rural </a>
                            <a> 265 Bangalore Urban </a>
                            <a> 294 BBMP </a>
                            <a> 264 Belgaum </a>
                            <a> 274 Bellary </a>
                            <a> 272 Bidar </a>
                            <a> 271 Chamarajanagar </a>
                            <a> 273 Chikamagalur </a>
                            <a> 291 Chikkaballapur </a>
                            <a> 268 Chitradurga </a>
                            <a> 269 Dakshina Kannada </a>
                            <a> 275 Davanagere </a>
                            <a> 278 Dharwad </a>
                            <a> 280 Gadag </a>
                            <a> 267 Gulbarga </a>
                            <a> 289 Hassan </a>
                            <a> 279 Haveri </a>
                            <a> 283 Kodagu </a>
                            <a> 277 Kolar </a>
                            <a> 282 Koppal </a>
                            <a> 290 Mandya </a>
                            <a> 266 Mysore </a>
                            <a> 284 Raichur </a>
                            <a> 292 Ramanagara </a>
                            <a> 287 Shimoga </a>
                            <a> 288 Tumkur </a>
                            <a> 286 Udupi </a>
                            <a> 281 Uttar Kannada </a>
                            <a> 293 Vijayapura </a>
                            <a> 285 Yadgir </a>
                            <a> 301 Alappuzha </a>
                            <a> 307 Ernakulam </a>
                            <a> 306 Idukki </a>
                            <a> 297 Kannur </a>
                            <a> 295 Kasaragod </a>
                            <a> 298 Kollam </a>
                            <a> 304 Kottayam </a>
                            <a> 305 Kozhikode </a>
                            <a> 302 Malappuram </a>
                            <a> 308 Palakkad </a>
                            <a> 300 Pathanamthitta </a>
                            <a> 296 Thiruvananthapuram </a>
                            <a> 303 Thrissur </a>
                            <a> 299 Wayanad </a>
                            <a> 309 Kargil </a>
                            <a> 310 Leh </a>
                            <a> 796 Agatti Island </a>
                            <a> 311 Lakshadweep </a>
                            <a> 320 Agar </a>
                            <a> 357 Alirajpur </a>
                            <a> 334 Anuppur </a>
                            <a> 354 Ashoknagar </a>
                            <a> 338 Balaghat </a>
                            <a> 343 Barwani </a>
                            <a> 362 Betul </a>
                            <a> 351 Bhind </a>
                            <a> 312 Bhopal </a>
                            <a> 342 Burhanpur </a>
                            <a> 328 Chhatarpur </a>
                            <a> 337 Chhindwara </a>
                            <a> 327 Damoh </a>
                            <a> 350 Datia </a>
                            <a> 324 Dewas </a>
                            <a> 341 Dhar </a>
                            <a> 336 Dindori </a>
                            <a> 348 Guna </a>
                            <a> 313 Gwalior </a>
                            <a> 361 Harda </a>
                            <a> 360 Hoshangabad </a>
                            <a> 314 Indore </a>
                            <a> 315 Jabalpur </a>
                            <a> 340 Jhabua </a>
                            <a> 353 Katni </a>
                            <a> 339 Khandwa </a>
                            <a> 344 Khargone </a>
                            <a> 335 Mandla </a>
                            <a> 319 Mandsaur </a>
                            <a> 347 Morena </a>
                            <a> 352 Narsinghpur </a>
                            <a> 323 Neemuch </a>
                            <a> 326 Panna </a>
                            <a> 359 Raisen </a>
                            <a> 358 Rajgarh </a>
                            <a> 322 Ratlam </a>
                            <a> 316 Rewa </a>
                            <a> 317 Sagar </a>
                            <a> 333 Satna </a>
                            <a> 356 Sehore </a>
                            <a> 349 Seoni </a>
                            <a> 332 Shahdol </a>
                            <a> 321 Shajapur </a>
                            <a> 346 Sheopur </a>
                            <a> 345 Shivpuri </a>
                            <a> 331 Sidhi </a>
                            <a> 330 Singrauli </a>
                            <a> 325 Tikamgarh </a>
                            <a> 318 Ujjain </a>
                            <a> 329 Umaria </a>
                            <a> 355 Vidisha </a>
                            <a> 391 Ahmednagar </a>
                            <a> 364 Akola </a>
                            <a> 366 Amravati </a>
                            <a> 397 Aurangabad </a>
                            <a> 384 Beed </a>
                            <a> 370 Bhandara </a>
                            <a> 367 Buldhana </a>
                            <a> 380 Chandrapur </a>
                            <a> 388 Dhule </a>
                            <a> 379 Gadchiroli </a>
                            <a> 378 Gondia </a>
                            <a> 386 Hingoli </a>
                            <a> 390 Jalgaon </a>
                            <a> 396 Jalna </a>
                            <a> 371 Kolhapur </a>
                            <a> 383 Latur </a>
                            <a> 395 Mumbai </a>
                            <a> 365 Nagpur </a>
                            <a> 382 Nanded </a>
                            <a> 387 Nandurbar </a>
                            <a> 389 Nashik </a>
                            <a> 381 Osmanabad </a>
                            <a> 394 Palghar </a>
                            <a> 385 Parbhani </a>
                            <a> 363 Pune </a>
                            <a> 393 Raigad </a>
                            <a> 372 Ratnagiri </a>
                            <a> 373 Sangli </a>
                            <a> 376 Satara </a>
                            <a> 374 Sindhudurg </a>
                            <a> 375 Solapur </a>
                            <a> 392 Thane </a>
                            <a> 377 Wardha </a>
                            <a> 369 Washim </a>
                            <a> 368 Yavatmal </a>
                            <a> 398 Bishnupur </a>
                            <a> 399 Chandel </a>
                            <a> 400 Churachandpur </a>
                            <a> 401 Imphal East </a>
                            <a> 402 Imphal West </a>
                            <a> 410 Jiribam </a>
                            <a> 413 Kakching </a>
                            <a> 409 Kamjong </a>
                            <a> 408 Kangpokpi </a>
                            <a> 412 Noney </a>
                            <a> 411 Pherzawl </a>
                            <a> 403 Senapati </a>
                            <a> 404 Tamenglong </a>
                            <a> 407 Tengnoupal </a>
                            <a> 405 Thoubal </a>
                            <a> 406 Ukhrul </a>
                            <a> 424 East Garo Hills </a>
                            <a> 418 East Jaintia Hills </a>
                            <a> 414 East Khasi Hills </a>
                            <a> 423 North Garo Hills </a>
                            <a> 417 Ri-Bhoi </a>
                            <a> 421 South Garo Hills </a>
                            <a> 422 South West Garo Hill </a>
                            <a> 415 South West Khasi Hil </a>
                            <a> 420 West Garo Hills </a>
                            <a> 416 West Jaintia Hills </a>
                            <a> 419 West Khasi Hills </a>
                            <a> 425 Aizawl East </a>
                            <a> 426 Aizawl West </a>
                            <a> 429 Champhai </a>
                            <a> 428 Kolasib </a>
                            <a> 432 Lawngtlai </a>
                            <a> 431 Lunglei </a>
                            <a> 427 Mamit </a>
                            <a> 430 Serchhip </a>
                            <a> 433 Siaha </a>
                            <a> 434 Dimapur </a>
                            <a> 444 Kiphire </a>
                            <a> 441 Kohima </a>
                            <a> 438 Longleng </a>
                            <a> 437 Mokokchung </a>
                            <a> 439 Mon </a>
                            <a> 435 Peren </a>
                            <a> 443 Phek </a>
                            <a> 440 Tuensang </a>
                            <a> 436 Wokha </a>
                            <a> 442 Zunheboto </a>
                            <a> 445 Angul </a>
                            <a> 448 Balangir </a>
                            <a> 447 Balasore </a>
                            <a> 472 Bargarh </a>
                            <a> 454 Bhadrak </a>
                            <a> 468 Boudh </a>
                            <a> 457 Cuttack </a>
                            <a> 473 Deogarh </a>
                            <a> 458 Dhenkanal </a>
                            <a> 467 Gajapati </a>
                            <a> 449 Ganjam </a>
                            <a> 459 Jagatsinghpur </a>
                            <a> 460 Jajpur </a>
                            <a> 474 Jharsuguda </a>
                            <a> 464 Kalahandi </a>
                            <a> 450 Kandhamal </a>
                            <a> 461 Kendrapara </a>
                            <a> 455 Kendujhar </a>
                            <a> 446 Khurda </a>
                            <a> 451 Koraput </a>
                            <a> 469 Malkangiri </a>
                            <a> 456 Mayurbhanj </a>
                            <a> 470 Nabarangpur </a>
                            <a> 462 Nayagarh </a>
                            <a> 465 Nuapada </a>
                            <a> 463 Puri </a>
                            <a> 471 Rayagada </a>
                            <a> 452 Sambalpur </a>
                            <a> 466 Subarnapur </a>
                            <a> 453 Sundargarh </a>
                            <a> 476 Karaikal </a>
                            <a> 477 Mahe </a>
                            <a> 475 Puducherry </a>
                            <a> 478 Yanam </a>
                            <a> 485 Amritsar </a>
                            <a> 483 Barnala </a>
                            <a> 493 Bathinda </a>
                            <a> 499 Faridkot </a>
                            <a> 484 Fatehgarh Sahib </a>
                            <a> 487 Fazilka </a>
                            <a> 480 Ferozpur </a>
                            <a> 489 Gurdaspur </a>
                            <a> 481 Hoshiarpur </a>
                            <a> 492 Jalandhar </a>
                            <a> 479 Kapurthala </a>
                            <a> 488 Ludhiana </a>
                            <a> 482 Mansa </a>
                            <a> 491 Moga </a>
                            <a> 486 Pathankot </a>
                            <a> 494 Patiala </a>
                            <a> 497 Rup Nagar </a>
                            <a> 498 Sangrur </a>
                            <a> 496 SAS Nagar </a>
                            <a> 500 SBS Nagar </a>
                            <a> 490 Sri Muktsar Sahib </a>
                            <a> 495 Tarn Taran </a>
                            <a> 507 Ajmer </a>
                            <a> 512 Alwar </a>
                            <a> 519 Banswara </a>
                            <a> 516 Baran </a>
                            <a> 528 Barmer </a>
                            <a> 508 Bharatpur </a>
                            <a> 523 Bhilwara </a>
                            <a> 501 Bikaner </a>
                            <a> 514 Bundi </a>
                            <a> 521 Chittorgarh </a>
                            <a> 530 Churu </a>
                            <a> 511 Dausa </a>
                            <a> 524 Dholpur </a>
                            <a> 520 Dungarpur </a>
                            <a> 517 Hanumangarh </a>
                            <a> 505 Jaipur I </a>
                            <a> 506 Jaipur II </a>
                            <a> 527 Jaisalmer </a>
                            <a> 533 Jalore </a>
                            <a> 515 Jhalawar </a>
                            <a> 510 Jhunjhunu </a>
                            <a> 502 Jodhpur </a>
                            <a> 525 Karauli </a>
                            <a> 503 Kota </a>
                            <a> 532 Nagaur </a>
                            <a> 529 Pali </a>
                            <a> 522 Pratapgarh </a>
                            <a> 518 Rajsamand </a>
                            <a> 534 Sawai Madhopur </a>
                            <a> 513 Sikar </a>
                            <a> 531 Sirohi </a>
                            <a> 509 Sri Ganganagar </a>
                            <a> 526 Tonk </a>
                            <a> 504 Udaipur </a>
                            <a> 535 East Sikkim </a>
                            <a> 537 North Sikkim </a>
                            <a> 538 South Sikkim </a>
                            <a> 536 West Sikkim </a>
                            <a> 779 Aranthangi </a>
                            <a> 555 Ariyalur </a>
                            <a> 578 Attur </a>
                            <a> 565 Chengalpet </a>
                            <a> 571 Chennai </a>
                            <a> 778 Cheyyar </a>
                            <a> 539 Coimbatore </a>
                            <a> 547 Cuddalore </a>
                            <a> 566 Dharmapuri </a>
                            <a> 556 Dindigul </a>
                            <a> 563 Erode </a>
                            <a> 552 Kallakurichi </a>
                            <a> 557 Kanchipuram </a>
                            <a> 544 Kanyakumari </a>
                            <a> 559 Karur </a>
                            <a> 780 Kovilpatti </a>
                            <a> 562 Krishnagiri </a>
                            <a> 540 Madurai </a>
                            <a> 576 Nagapattinam </a>
                            <a> 558 Namakkal </a>
                            <a> 577 Nilgiris </a>
                            <a> 564 Palani </a>
                            <a> 573 Paramakudi </a>
                            <a> 570 Perambalur </a>
                            <a> 575 Poonamallee </a>
                            <a> 546 Pudukkottai </a>
                            <a> 567 Ramanathapuram </a>
                            <a> 781 Ranipet </a>
                            <a> 545 Salem </a>
                            <a> 561 Sivaganga </a>
                            <a> 580 Sivakasi </a>
                            <a> 551 Tenkasi </a>
                            <a> 541 Thanjavur </a>
                            <a> 569 Theni </a>
                            <a> 554 Thoothukudi (Tuticor </a>
                            <a> 560 Tiruchirappalli </a>
                            <a> 548 Tirunelveli </a>
                            <a> 550 Tirupattur </a>
                            <a> 568 Tiruppur </a>
                            <a> 572 Tiruvallur </a>
                            <a> 553 Tiruvannamalai </a>
                            <a> 574 Tiruvarur </a>
                            <a> 543 Vellore </a>
                            <a> 542 Viluppuram </a>
                            <a> 549 Virudhunagar </a>
                            <a> 582 Adilabad </a>
                            <a> 583 Bhadradri Kothagudem </a>
                            <a> 581 Hyderabad </a>
                            <a> 584 Jagtial </a>
                            <a> 585 Jangaon </a>
                            <a> 586 Jayashankar Bhupalpa </a>
                            <a> 587 Jogulamba Gadwal </a>
                            <a> 588 Kamareddy </a>
                            <a> 589 Karimnagar </a>
                            <a> 590 Khammam </a>
                            <a> 591 Kumuram Bheem </a>
                            <a> 592 Mahabubabad </a>
                            <a> 593 Mahabubnagar </a>
                            <a> 594 Mancherial </a>
                            <a> 595 Medak </a>
                            <a> 596 Medchal </a>
                            <a> 612 Mulugu </a>
                            <a> 597 Nagarkurnool </a>
                            <a> 598 Nalgonda </a>
                            <a> 613 Narayanpet </a>
                            <a> 599 Nirmal </a>
                            <a> 600 Nizamabad </a>
                            <a> 601 Peddapalli </a>
                            <a> 602 Rajanna Sircilla </a>
                            <a> 603 Rangareddy </a>
                            <a> 604 Sangareddy </a>
                            <a> 605 Siddipet </a>
                            <a> 606 Suryapet </a>
                            <a> 607 Vikarabad </a>
                            <a> 608 Wanaparthy </a>
                            <a> 609 Warangal(Rural) </a>
                            <a> 610 Warangal(Urban) </a>
                            <a> 611 Yadadri Bhuvanagiri </a>
                            <a> 614 Dhalai </a>
                            <a> 615 Gomati </a>
                            <a> 616 Khowai </a>
                            <a> 617 North Tripura </a>
                            <a> 618 Sepahijala </a>
                            <a> 619 South Tripura </a>
                            <a> 620 Unakoti </a>
                            <a> 621 West Tripura </a>
                            <a> 622 Agra </a>
                            <a> 623 Aligarh </a>
                            <a> 625 Ambedkar Nagar </a>
                            <a> 626 Amethi </a>
                            <a> 627 Amroha </a>
                            <a> 628 Auraiya </a>
                            <a> 646 Ayodhya </a>
                            <a> 629 Azamgarh </a>
                            <a> 630 Badaun </a>
                            <a> 631 Baghpat </a>
                            <a> 632 Bahraich </a>
                            <a> 633 Balarampur </a>
                            <a> 634 Ballia </a>
                            <a> 635 Banda </a>
                            <a> 636 Barabanki </a>
                            <a> 637 Bareilly </a>
                            <a> 638 Basti </a>
                            <a> 687 Bhadohi </a>
                            <a> 639 Bijnour </a>
                            <a> 640 Bulandshahr </a>
                            <a> 641 Chandauli </a>
                            <a> 642 Chitrakoot </a>
                            <a> 643 Deoria </a>
                            <a> 644 Etah </a>
                            <a> 645 Etawah </a>
                            <a> 647 Farrukhabad </a>
                            <a> 648 Fatehpur </a>
                            <a> 649 Firozabad </a>
                            <a> 650 Gautam Buddha Nagar </a>
                            <a> 651 Ghaziabad </a>
                            <a> 652 Ghazipur </a>
                            <a> 653 Gonda </a>
                            <a> 654 Gorakhpur </a>
                            <a> 655 Hamirpur </a>
                            <a> 656 Hapur </a>
                            <a> 657 Hardoi </a>
                            <a> 658 Hathras </a>
                            <a> 659 Jalaun </a>
                            <a> 660 Jaunpur </a>
                            <a> 661 Jhansi </a>
                            <a> 662 Kannauj </a>
                            <a> 663 Kanpur Dehat </a>
                            <a> 664 Kanpur Nagar </a>
                            <a> 665 Kasganj </a>
                            <a> 666 Kaushambi </a>
                            <a> 667 Kushinagar </a>
                            <a> 668 Lakhimpur Kheri </a>
                            <a> 669 Lalitpur </a>
                            <a> 670 Lucknow </a>
                            <a> 671 Maharajganj </a>
                            <a> 672 Mahoba </a>
                            <a> 673 Mainpuri </a>
                            <a> 674 Mathura </a>
                            <a> 675 Mau </a>
                            <a> 676 Meerut </a>
                            <a> 677 Mirzapur </a>
                            <a> 678 Moradabad </a>
                            <a> 679 Muzaffarnagar </a>
                            <a> 680 Pilibhit </a>
                            <a> 682 Pratapgarh </a>
                            <a> 624 Prayagraj </a>
                            <a> 681 Raebareli </a>
                            <a> 683 Rampur </a>
                            <a> 684 Saharanpur </a>
                            <a> 685 Sambhal </a>
                            <a> 686 Sant Kabir Nagar </a>
                            <a> 688 Shahjahanpur </a>
                            <a> 689 Shamli </a>
                            <a> 690 Shravasti </a>
                            <a> 691 Siddharthnagar </a>
                            <a> 692 Sitapur </a>
                            <a> 693 Sonbhadra </a>
                            <a> 694 Sultanpur </a>
                            <a> 695 Unnao </a>
                            <a> 696 Varanasi </a>
                            <a> 704 Almora </a>
                            <a> 707 Bageshwar </a>
                            <a> 699 Chamoli </a>
                            <a> 708 Champawat </a>
                            <a> 697 Dehradun </a>
                            <a> 702 Haridwar </a>
                            <a> 709 Nainital </a>
                            <a> 698 Pauri Garhwal </a>
                            <a> 706 Pithoragarh </a>
                            <a> 700 Rudraprayag </a>
                            <a> 701 Tehri Garhwal </a>
                            <a> 705 Udham Singh Nagar </a>
                            <a> 703 Uttarkashi </a>
                        </div>
                    </div>

                    <script>
                        /* When the user clicks on the button,
                        toggle between hiding and showing the dropdown content */
                        function myFunction() {
                            document.getElementById("myDropdown").classList.toggle("show");
                        }

                        function filterFunction() {
                            var input, filter, ul, li, a, i;
                            input = document.getElementById("myInput");
                            filter = input.value.toUpperCase();
                            div = document.getElementById("myDropdown");
                            a = div.getElementsByTagName("a");
                            for (i = 0; i < a.length; i++) {
                                txtValue = a[i].textContent || a[i].innerText;
                                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                    a[i].style.display = "";
                                } else {
                                    a[i].style.display = "none";
                                }
                            }
                        }
                    </script>
                    <br><br>

                    <div class="submit">
                        <button onclick="function_name()" class="submit">Submit</button>
                    </div>
                    <script>
                        function function_name(){
                            window.alert("Hello World")
                        }
                    </script>
                    <!-- <input type="number" placeholder="Enter your district id here" class="inp">
                    <br><br>
                    <button onclick="function_name()" class="dropbtn">Submit</button> -->
                    
                    <br><br>
                    <!-- <button class="btn btn-warning"><a href="vaccine.py"></a></button> -->
                </div>
            </center>
        </div>


        <footer>
            <div class="container">
                <center>
                    <p>This Website is Made by Group no. 4 PBL by Students of PICT DIV 8</p>
                </center>
            </div>
        </footer>
</body>

</html>
