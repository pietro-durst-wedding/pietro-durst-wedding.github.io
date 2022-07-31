#!/bin/bash

# hard-coded constants
url=https://github.com/pietro-durst-wedding/pietro-durst-wedding.github.io
last_num_commit_file_path="last_num_commit.txt"
 
function get_num_commits () {
  num_commits=$(curl $url | grep -B 2 "Commits on main" | grep strong | sed 's/<strong>//g' | sed 's/<\/strong>//g')
  
  # read last number of commits
  last_num_commits=$(cat $last_num_commit_file_path)

  if [ $num_commits == $last_num_commits ]; then
    echo "No new changes."
  else
      echo "New changes to pull."
  fi

  # write to file
  echo $num_commits | xargs > $last_num_commit_file_path
}

get_num_commits

