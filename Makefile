SRC = index.js

default:
	@echo "No default task"

test:
	@./node_modules/.bin/mocha --harmony

include node_modules/make-lint/index.mk
