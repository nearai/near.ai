#!/bin/bash

gatsby build
rm -rf docs
mv public docs
