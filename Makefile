all:
	node create_test.js > test/test.js

run:
	python3 -m http.server --directory test
