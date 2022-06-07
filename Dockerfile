FROM qulianqing/android-box-new:1.0
RUN ln -s /usr/local/nvm/versions/node/v8.17.0/bin/node /usr/local/bin/node
RUN ln -s /usr/local/nvm/versions/node/v8.17.0/bin/npm /usr/local/bin/npm

COPY . .

ENTRYPOINT ["bash", "-e", "build.sh"]
