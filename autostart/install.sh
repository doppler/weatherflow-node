SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

echo $SCRIPTPATH
sudo cp $SCRIPTPATH/weatherflow-dashboard.service /etc/systemd/system

sudo systemctl enable weatherflow-dashboard.service

sudo systemctl start weatherflow-dashboard.service

sudo cp $SCRIPTPATH/autostart /etc/xdg/lxsession/LXDE-pi/autostart