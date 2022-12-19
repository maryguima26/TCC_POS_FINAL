#!/usr/bin/env bash

set -e

PROJECT_BASE_PATH='/usr/local/apps/tfall/TCC_POS_FINAL/tfall_back/tfall'

git pull
$PROJECT_BASE_PATH/env/bin/python manage.py migrate
$PROJECT_BASE_PATH/env/bin/python manage.py collectstatic --noinput
supervisorctl restart tfall

echo "DONE! :)"
