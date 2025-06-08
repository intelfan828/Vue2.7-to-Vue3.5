<template>
  <div class="hover-wrapper">
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card colClasses="xl12 lg12 md12 sm12 xs12">
          <div class="mb-5">
            <p>Easily alternate styles to provide a unique design.</p>
          </div>
          <v-timeline>
            <v-timeline-item color="purple lighten-2" fill-dot right>
              <v-card>
                <v-card-title class="purple lighten-2">
                  <v-icon size="42" class="mr-3 white--text" icon="mdi-magnify" />
                  <h2 class="display-1 white--text font-weight-light">Title 1</h2>
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-col xs10>
                      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                      nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                    </v-col>
                    <v-col xs2>
                      <v-icon size="64" icon="mdi-calendar-text" />
                    </v-col>
                  </v-layout>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="amber lighten-1" fill-dot left small>
              <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                  <h2 class="display-1 mr-3 white--text font-weight-light">Title 2</h2>
                  <v-icon size="42" class="white--text" icon="mdi-home-outline" />
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-col xs8>
                      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                      nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                    </v-col>
                    <v-col xs4> Lorem ipsum dolor sit amet, no nam oblique veritus. </v-col>
                  </v-layout>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="cyan lighten-1" fill-dot right>
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon class="mr-3 white--text" size="42" icon="mdi-email-outline" />
                  <h2 class="display-1 white--text font-weight-light">Title 3</h2>
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-col v-for="n in 3" :key="n" xs4>
                      Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                    </v-col>
                  </v-layout>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="red lighten-1" fill-dot left small>
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h2 class="display-1 mr-3 white--text font-weight-light">Title 4</h2>
                  <v-icon size="42" class="white--text" icon="mdi-account-multiple-outline" />
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-col xs2>
                      <v-icon size="64" icon="mdi-server-network" />
                    </v-col>
                    <v-col xs10>
                      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                      nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an
                      vim zril disputando voluptatibus.
                    </v-col>
                  </v-layout>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="green lighten-1" fill-dot right>
              <v-card>
                <v-card-title class="green lighten-1">
                  <v-icon class="mr-3 white--text" size="42" icon="mdi-phone-in-talk" />
                  <h2 class="display-1 white--text font-weight-light">Title 5</h2>
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-col>
                      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                      nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an
                      vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-col>
                  </v-layout>
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>
