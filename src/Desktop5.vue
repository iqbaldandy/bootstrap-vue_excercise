<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div id="sidecol" class="d-flex flex-column justify-content-between sidecol" style="background: #114483">
            <div>
              <ul class="nav flex-column">
                <li class="nav-item navitem mx-auto">
                  <b-button v-on:click="greet" class="my_text_button"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></b-button>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" id="navlink" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg" style="text-align:left;">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon2.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_2.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/sidebar_icon_3.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_3.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon4.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_4.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon5.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_5.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon6.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_6.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon7.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_7.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/sidebar_icon_8.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_8.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon9.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_9.svg">
                  </a>
                </li>
              </ul>           
            </div>
            <div>
                <li class="nav-item navitem mx-auto">
                  <a href="#"><img  src="./assets/sidebar_icon_10.svg" style="margin-right:5px; text-align:center;"></a>
                </li>
            </div>            
          </div>

          <!-- Navbar-->
          <div class="col navcol">
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#EBEBEB;">
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <span class="navbar-text" style="margin-right:12px">Project</span>
                  </li>
                  <li class="nav-item dropdown">
                    <button class="btn btn-secondary btn-outline-light text-body dropdown-toggle" style="background: #FCFCFC; border-radius: 6px;" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Virtusee Project Name
                      <img src="./assets/dropdown arrow.svg" style="margin-left:32px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <span class="navbar-text">
                  <img src="./assets/lonceng.svg" style="margin-right:5px">Help and Support
                </span>
                <span class="linedivide1"></span>
                <div class="dropdown">
                  <button class="btn btn-secondary text-body dropdown-toggle" style="background:#EBEBEB; border-color:#EBEBEB;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="./assets/icon profil.svg" alt="" style="margin-right:5px">
                      Dropdown button
                      <img src="./assets/dropdown arrow.svg" alt="" style="margin-left:32px">
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </nav>
            
            <!-- Main Content Start-->
            <div class="container" style="margin-top:63px;">
              <b-row>
                  <b-col lg="11">
                      <b-breadcrumb :items="items"></b-breadcrumb>
                  </b-col>
              </b-row>
              <div>
                <b-tabs class="tabs1"
                active-nav-item-class="font-weight-bold text-uppercase"
                content-class="mt-3">
                  <b-tab  class="tabs2" title="ACCOUNT" active>
                      <b-form class="tabs3"  @submit="onSubmit" @reset="onReset">
                          <p class="d4_header">Change Password</p>
                          <b-row>
                              <b-col lg="5">
                                  <b-form-group id="input-group-1" label="Create Password" label-for="input-1" description="At least 5 character long">
                                      <b-form-input
                                          id="input-1"
                                          v-model="form.password"
                                          type="password"
                                          required
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              <b-col lg="1">
                              </b-col>
                              <b-col lg="5">
                                  <b-form-group id="input-group-2" label="Confirm Password" label-for="input-2" description="Re-type your new password">
                                      <b-form-input
                                          id="input-2"
                                          v-model="form.cpassword"
                                          type="password"
                                          required
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              
                          </b-row>
<!-- ACCOUNT DETAILS-->
                          <b-row>
                              <b-col lg="5">
                                  <b-form-group id="input-group-3" label="ID" label-for="input-3" description="You can not change this field" disabled>
                                      <b-form-input
                                          id="input-3"
                                          v-model="form.id"
                                          required
                                          type="text"
                                          readonly 
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              <b-col lg="1">
                              </b-col>
                              <b-col lg="5">
                                  <b-form-group id="input-group-4" label="Name" label-for="input-4">
                                      <b-form-input
                                          id="input-4"
                                          v-model="form.name"
                                          required
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              
                          </b-row>
                          <!-- --------- -->
                          <p class="d4_header">Account Details</p>
                          <b-row class="row_ac_detail">
                              <b-col lg="5">
                                  <b-form-group id="input-group-5" label="User Name" label-for="input-5" description="You can not change this field" disabled>
                                      <b-form-input
                                          id="input-5"
                                          v-model="form.username"
                                          required
                                          type="text"
                                          readonly 
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              <b-col lg="1">
                              </b-col>
                              <b-col lg="5">
                                  <b-form-group id="input-group-6" label="attribute1" label-for="input-6">
                                      <b-form-input
                                          id="input-1"
                                          v-model="form.attribute1"
                                          required
                                      >
                                      </b-form-input>
                                  </b-form-group>
                              </b-col>
                              <!-- Main Content Start-->
                              
                          </b-row>
                      </b-form>
                  </b-tab>
                  <b-tab title="SCHEDULE">
                    <v-app id="dayspan" v-cloak>
                     <ds-calendar-app ref="app"
                        :calendar="calendar"
                        :read-only="readOnly"
                        @change="saveState">

                        <!-- <template slot="title">
                          DaySpan
                        </template> -->

                        <!-- <template slot="menuRight">
                          <v-btn icon large href="https://github.com/ClickerMonkey/dayspan-vuetify" target="_blank">
                            <v-avatar size="32px" tile>
                              <img src="https://simpleicons.org/icons/github.svg" alt="Github">
                            </v-avatar>
                          </v-btn>
                        </template> -->

                        <template slot="eventPopover" slot-scope="slotData">
                          <ds-calendar-event-popover
                            v-bind="slotData"
                            :read-only="readOnly"
                            @finish="saveState"
                          ></ds-calendar-event-popover>
                        </template>

                        <template slot="eventCreatePopover" slot-scope="{placeholder, calendar}">
                          <ds-calendar-event-create-popover
                            :calendar-event="placeholder"
                            :calendar="calendar"
                            :close="$refs.app.$refs.calendar.clearPlaceholder"
                            @create-edit="$refs.app.editPlaceholder"
                            @create-popover-closed="saveState"
                          ></ds-calendar-event-create-popover>
                        </template>

                        <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
                          <div>
                            <v-icon class="ds-ev-icon"
                              v-if="details.icon"
                              size="14"
                              :style="{color: details.forecolor}">
                              {{ details.icon }}
                            </v-icon>
                            <strong class="ds-ev-title">{{ details.title }}</strong>
                          </div>
                          <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
                        </template>

                        <template slot="drawerBottom">
                          <div class="pa-3">
                            <v-checkbox
                              label="Read Only?"
                              v-model="readOnly"
                            ></v-checkbox>
                          </div>
                        </template>
                      </ds-calendar-app>
                    </v-app>
                  </b-tab>
              </b-tabs>
              </div>
            </div>
            <!-- Main Content End-->

          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Calendar, Month } from 'dayspan';
import Vue from 'vue';
export default {
  name: 'app',
  data () {
    return {
      counter:'close',
      items: [
        {
          text: 'My Team',
          href: '#'
        },
        {
          text: 'Member Detail',
          href: '#'
        }
      ],
      form: {
        id: 'JKT0003',
        password: '',
        name: 'Rika Sulistyawati',
        cpassword: '',
        username: 'RikaJOG',
        attribute1: 'Attribute',   
      },
      storeKey: 'dayspanState',
      calendar: Calendar.months(),
      readOnly: false,
      defaultEvents: [
      {
        data: {
          title: 'Christmas Day',
          color: '#2196F3',
          calendar: 'US Holidays'
        },
        schedule: {
          month: [Month.DECEMBER],
          dayOfMonth: [25]
        }
      }
    ]
    }
  },
   mounted()
  {
    window.app = this.$refs.app;

    this.loadState();
  },
  methods: {
      greet: function () {
            // `this` inside methods points to the Vue instance
            // `event` is the native DOM event
            if (this.counter == 'close') {
                this.counter = 'open'
                // alert('status side bar ' + this.counter + '!')
                document.getElementById("sidecol").style.width = "219px";
                // document.getElementById("sidecol").style.textAlign = "left";
            }
            else if (this.counter == 'open'){
                this.counter = 'close'
                document.getElementById("sidecol").style.width = "5%";
                // alert('close ' + this.counter + '!')
            }
        },
        onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        },
        getCalendarTime(calendarEvent)
        {
          let sa = calendarEvent.start.format('a');
          let ea = calendarEvent.end.format('a');
          let sh = calendarEvent.start.format('h');
          let eh = calendarEvent.end.format('h');

          if (calendarEvent.start.minute !== 0)
          {
            sh += calendarEvent.start.format(':mm');
          }

          if (calendarEvent.end.minute !== 0)
          {
            eh += calendarEvent.end.format(':mm');
          }

          return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
        },

        saveState()
        {
          let state = this.calendar.toInput(true);
          let json = JSON.stringify(state);

          localStorage.setItem(this.storeKey, json);
        },

        loadState()
        {
          let state = {};

          try
          {
            let savedState = JSON.parse(localStorage.getItem(this.storeKey));

            if (savedState)
            {
              state = savedState;
              state.preferToday = false;
            }
          }
          catch (e)
          {
            // eslint-disable-next-line
            console.log( e );
          }

          if (!state.events || !state.events.length)
          {
            state.events = this.defaultEvents;
          }

          state.events.forEach(ev =>
          {
            let defaults = this.$dayspan.getDefaultEventDetails();

            ev.data = Vue.util.extend( defaults, ev.data );
          });

          this.$refs.app.setState( state );
        }
      }
      // addRowInput() {
      //   this.item = ['<p>test<p>'];
      //   this.items.push(this.item);
      // }
    }
</script>
