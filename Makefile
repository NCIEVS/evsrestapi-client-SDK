VERSION=2.4.0
BUILD_DIR=./build
ifeq ($(OS),Windows_NT)
PYTHON ?= python
else
PYTHON ?= python3
endif

# Generate updated samples
resample:
	@echo "Remake samples"
	cd curl-examples && $(PYTHON) curl_check.py
	cd bash-examples && $(PYTHON) bash_check.py

# Re-run tests across other cases
test:
	cd postman-examples && sh postman.sh
	cd fhir-examples && sh postman_fhir.sh R4
	cd python-examples && $(PYTHON) python_check.py
	cd java-examples && $(PYTHON) java_check.py

clean:
	@echo "Cleaning ${BUILD_DIR} directory if it exists"

tag:
	git tag -a "v`/bin/date +%Y-%m-%d`-${VERSION}.RELEASE" -m "Release `/bin/date +%Y-%m-%d`"
	git push origin "v`/bin/date +%Y-%m-%d`-${VERSION}.RELEASE"

releasetag:
	git tag -a "${VERSION}-RC-`/bin/date +%Y-%m-%d`" -m "Release ${VERSION}-RC-`/bin/date +%Y-%m-%d`"
	git push origin "${VERSION}-RC-`/bin/date +%Y-%m-%d`"

rmreleasetag:
	git tag -d "${VERSION}-RC-`/bin/date +%Y-%m-%d`"
	git push origin --delete "${VERSION}-RC-`/bin/date +%Y-%m-%d`"

rmtag:
	git tag -d "v`/bin/date +%Y-%m-%d`-${VERSION}.RELEASE"
	git push origin --delete "v`/bin/date +%Y-%m-%d`-${VERSION}.RELEASE"

.PHONY: build
