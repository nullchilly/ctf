sudo chmod 766 /opt/ictf/services/prosopagnosia/deploy/init.sql
cd /opt/ictf/services/prosopagnosia/deploy && docker-compose up -d
cd /opt/ictf/services/museumorphosis && docker-compose up -d
sudo chmod +x /opt/ictf/services/mailbox/scripts/*
cd /opt/ictf/services/mailbox/ && docker-compose up -d
cd /opt/ictf/services/yellow_submarine/ && docker-compose up -d
cd /opt/ictf/services/everybodys_got_something_to_hide/ && docker-compose up -d
cd /opt/ictf/services/lucy_in_the_sky_with_diamonds/ && docker-compose up -d
cd /opt/ictf/services/strawberry_fields_forever/ && docker-compose up -d