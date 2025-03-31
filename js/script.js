// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of the triangle
 */
function calculate () {
  // input
  let height = parseInt(document.getElementById('height-of-the-triangle').value);
  let base = parseInt(document.getElementById('base-of-the-triangle').value);

  // process
  let area = (base * height) / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}