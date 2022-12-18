#!/usr/bin/env bash

set -e

# TODO: Set to URL of git repo.
PROJECT_GIT_URL='https://github.com/maryguima26/TCC_POS_FINAL/tree/main/tfall_back/tfall'

PROJECT_BASE_PATH='/usr/local/apps/TCC_POS_FINAL/tfall_back/tfall'
VIRTUALENV_BASE_PATH='/usr/local/virtualenvs'

# Set Ubuntu Language
locale-gen en_GB.UTF-8

# Install Python, SQLite and pip
echo "Installing dependencies..."
apt-get update
apt-get install -y python3-dev python3-venv sqlite python-pip supervisor nginx git

mkdir -p $PROJECT_BASE_PATH
git clone $PROJECT_GIT_URL $PROJECT_BASE_PATH/tfall

mkdir -p $VIRTUALENV_BASE_PATH
python3 -m venv /usr/local/virtualenvs/api

/usr/local/virtualenvs/api/bin/pip install -r /usr/local/apps/TCC_POS_FINAL/tfall_back/tfall/requirements.txt

# Run migrations
cd /usr/local/apps/TCC_POS_FINAL/tfall_back/tfall/tfall/src

# Setup Supervisor to run our uwsgi process.
cp $PROJECT_BASE_PATH/tfall/deploy/supervisor_api.conf /etc/supervisor/conf.d/api.conf
supervisorctl reread
supervisorctl update
supervisorctl restart api

# Setup nginx to make our application accessible.
cp $PROJECT_BASE_PATH/tfall/deploy/nginx_api.conf /etc/nginx/sites-available/api.conf
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/api.conf /etc/nginx/sites-enabled/api.conf
systemctl restart nginx.service

echo "DONE! :)"


#!/usr/bin/env bash

set -e

# TODO: Set to URL of git repo.
PROJECT_GIT_URL='https://github.com/maryguima26/TCC_POS_FINAL'

PROJECT_BASE_PATH='/usr/local/apps/TCC_POS_FINAL/tfall_back/tfall'

echo "Installing dependencies..."
apt-get update
apt-get install -y python3-dev python3-venv sqlite python-pip supervisor nginx git

# Create project directory
mkdir -p $PROJECT_BASE_PATH
git clone $PROJECT_GIT_URL $PROJECT_BASE_PATH

# Create virtual environment
mkdir -p $PROJECT_BASE_PATH/env
python3 -m venv $PROJECT_BASE_PATH/env

# Install python packages
$PROJECT_BASE_PATH/env/bin/pip install -r $PROJECT_BASE_PATH/requirements.txt
$PROJECT_BASE_PATH/env/bin/pip install uwsgi==2.0.18

# Run migrations and collectstatic
cd $PROJECT_BASE_PATH
$PROJECT_BASE_PATH/env/bin/python manage.py migrate
$PROJECT_BASE_PATH/env/bin/python manage.py collectstatic --noinput

# Configure supervisor
cp $/usr/local/apps/TCC_POS_FINAL/tfall_back/tfall/deploy/supervisor_api.conf /etc/supervisor/conf.d/api.conf
supervisorctl reread
supervisorctl update
supervisorctl restart api

# Configure nginx
cp $/usr/local/apps/TCC_POS_FINAL/tfall_back/tfall/deploy/nginx_api.conf /etc/nginx/sites-available/api.conf
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/api.conf /etc/nginx/sites-enabled/api.conf
systemctl restart nginx.service

echo "DONE! :)"