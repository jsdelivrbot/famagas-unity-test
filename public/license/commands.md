# start gource data visualization
gource --max-user-speed 150 --seconds-per-day 0.5 --max-files 500 --disable-bloom -w
gource --max-user-speed 150 --seconds-per-day 1 --disable-bloom -w
gource --max-user-speed 200 --seconds-per-day 1 --highlight-dirs --file-idle-time 10 -e 0.005 -f --max-files 900
<<<<<<< HEAD
gource --max-user-speed 250 --seconds-per-day 0.7 --disable-bloom --title FAMAGAS-WEB --hide filenames,usernames,mouse -w
=======
gource --max-user-speed 300 --seconds-per-day 0.5 --disable-bloom --title FAMAGAS-WEB --hide filenames,usernames,mouse -w
>>>>>>> 2d96c0d46d06d0523c93d5c459b0f78519cb99f8

# start dev instance
npm run dev

# start build instance
npm run build

# kill if the port is delay of response  
sudo fuser -n tcp -k 3000
sudo fuser -n tcp -k 8080

# clean large files of folder
git reset HEAD~ ou git commit --amend -CHEAD

# check status of large file in directory
git rm --cached famagas-full-erp-system Setup 3.0.2

# send commits to github
git push origin master --force

# interact with api
lb --help