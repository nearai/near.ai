#!/bin/bash

gatsby build
mv docs old_docs
mv public docs
mv old_docs/CNAME docs/
rm -rf docs
