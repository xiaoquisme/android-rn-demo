FROM android-box:1.0

COPY . .

CMD . $HOME/.bashrc && npm install && cd android &&./gradlew clean assembleRelease
