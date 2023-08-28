<template>
  <main
    class="h-screen w-screen text-gray-800 dark:text-zinc-100"
  >
    <div
      class="h-screen w-screen flex flex-col-reverse sm:flex-row"
    >
      <div
        class="w-full h-1/2 sm:h-screen sm:w-[384px] 2xl:w-[512px] shrink-0 bg-gray-100 flex flex-col shadow-2xl border-r z-[10000]"
      >
        <h1
          class="text-2xl sm:text-4xl font-bold tracking-tighter px-4 py-2 sm:py-4 bg-gray-50 z-[10000] dark:bg-zinc-800 text-gray-900 dark:text-zinc-50 border-b border-gray-200 dark:border-zinc-600"
        >
          Studi-Wohnheime
        </h1>
        <ResultList ref="results" :results="wohnheime" :selected_id="selected_id" />
      </div>
      <LMap
        ref="map"
        :zoom="14"
        :center="[51.546,9.942]"
        :options="{zoomControl: false}"
      >
        <LMarker
          v-for="w in wohnheime"
          :key="w.id"
          :lat-lng="w.coordinates"
          :radius="50"
          @click="select_marker(w.id)"
        >
          <LTooltip
            :options="{direction: 'top'}"
            class="md:p-4"
          >
            <p class="text-base font-bold max-md:hidden mb-2">
              {{w.address}}
            </p>
            <ul class="text-xs md:text-sm md:space-y-2">
              <li
                v-for="h in w.housing"
                class="flex lg:grid grid-cols-[20px_280px_92px] gap-2"
              >
                <HousingIcon :type="h.type" />
                <span class="opacity-75 max:sm:hidden">
                  {{ h.type }}
                </span>
                <span class="text-right opacity-50 max-md:hidden">
                  {{ h.waiting_period }} Monate
                </span>
              </li>
            </ul>
          </LTooltip>
        </LMarker>
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </div>
  </main>
</template>


<style>
  .leaflet-tooltip {
    border-radius: 0.375rem;
    background-color: rgba(255,255,255, .75);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    backdrop-filter: blur(8px);
    opacity: 1;
  }
</style>

<script setup>
  let selected_id = ref(-1);
  const results = ref(null);

  function select_marker(id) {
    console.log(results)
    results.value.expand(id, true, true);
  }
  const wohnheime = [
  {
    "id": 0,
    "address": "Albrecht-Thaer-Weg 10-14b",
    "housing": [
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "12",
        "waiting_period": "12"
      },
      {
        "type": "Einzelappartements",
        "size": "15",
        "waiting_period": "15"
      }
    ],
    "coordinates": [
      51.5471859,
      9.946909
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/albrecht-thaer-weg-10-14b"
  },
  {
    "id": 1,
    "address": "Albrecht-Thaer-Weg 8-26",
    "housing": [
      {
        "type": "Familie mit Kind",
        "size": "45-64",
        "waiting_period": "45-64"
      }
    ],
    "coordinates": [
      51.5471859,
      9.946909
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/albrecht-thaer-weg-8-26"
  },
  {
    "id": 2,
    "address": "Albrecht-Thaer-Weg 16 c-d",
    "housing": [
      {
        "type": "Einzelzimmer in 3er-Gruppenwohnungen",
        "size": "13",
        "waiting_period": "13"
      }
    ],
    "coordinates": [
      51.548188,
      9.949091
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/albrecht-thaer-weg-16-c-d"
  },
  {
    "id": 3,
    "address": "Albrecht-Thaer-Weg 18-20c",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "14",
        "waiting_period": "14"
      }
    ],
    "coordinates": [
      51.548123,
      9.947093
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/albrecht-thaer-weg-18-20c"
  },
  {
    "id": 4,
    "address": "Albrecht-Thaer-Weg 18-20c",
    "housing": [
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "10-22",
        "waiting_period": "10-22"
      }
    ],
    "coordinates": [
      51.548123,
      9.947093
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/albrecht-thaer-weg-18-20c"
  },
  {
    "id": 5,
    "address": "Arndtstraße 9",
    "housing": [
      {
        "type": "Einzelzimmer in 3er-Gruppenwohnungen",
        "size": "10-22",
        "waiting_period": "10-22"
      }
    ],
    "coordinates": [
      51.54665095,
      9.932825128127721
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/studentenwerk-goettingen-wohnheim-arndtstrasse-9"
  },
  {
    "id": 6,
    "address": "Christophorusweg 12",
    "housing": [
      {
        "type": "Einzelzimmer in 3er-Gruppenwohnungen",
        "size": "12",
        "waiting_period": "12"
      },
      {
        "type": "Einzelzimmer in 6er-Gruppenwohnungen",
        "size": "12",
        "waiting_period": "12"
      },
      {
        "type": "Einzelappartements",
        "size": "18",
        "waiting_period": "18"
      },
      {
        "type": "Doppelappartements",
        "size": "44",
        "waiting_period": "44"
      }
    ],
    "coordinates": [
      51.5485977,
      9.937142502450659
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/christophorusweg-12"
  },
  {
    "id": 7,
    "address": "Geiststraße 4/5",
    "housing": [
      {
        "type": "Doppelzimmer (für 1 Person)",
        "size": "23-39",
        "waiting_period": "23-39"
      },
      {
        "type": "Einzelzimmer",
        "size": "10-31",
        "waiting_period": "10-31"
      }
    ],
    "coordinates": [
      51.5340891,
      9.928669
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/geiststrasse-4/5"
  },
  {
    "id": 8,
    "address": "Goßlerstraße 12b",
    "housing": [
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnung",
        "size": "14-16",
        "waiting_period": "14-16"
      }
    ],
    "coordinates": [
      51.5414755,
      9.9381651
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/wohnheim-gosslerstrasse-12b"
  },
  {
    "id": 9,
    "address": "Goßlerstraße 13 Akademische Burse",
    "housing": [
      {
        "type": "Einzelzimmer",
        "size": "8-24",
        "waiting_period": "8-24"
      },
      {
        "type": "Einzelappartements",
        "size": "13-29",
        "waiting_period": "13-29"
      },
      {
        "type": "Doppelappartements",
        "size": "30-43",
        "waiting_period": "30-43"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "56-74",
        "waiting_period": "56-74"
      },
      {
        "type": "Zweizimmerwohnungen für Paare",
        "size": "35-43",
        "waiting_period": "35-43"
      }
    ],
    "coordinates": [
      51.54170515,
      9.93737433010335
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/gosslerstrasse-13-akademische-burse"
  },
  {
    "id": 10,
    "address": "Grisebachstraße 7, Lutterterrasse",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "18-23",
        "waiting_period": "18-23"
      }
    ],
    "coordinates": [
      51.5575703,
      9.9522745
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/lutterterrasse-grisebachstrasse-7"
  },
  {
    "id": 11,
    "address": "Gutenbergstraße 2-42, Studentendorf",
    "housing": [
      {
        "type": "Einzelzimmer",
        "size": "10-18",
        "waiting_period": "10-18"
      },
      {
        "type": "Einzelappartements",
        "size": "17-22",
        "waiting_period": "17-22"
      },
      {
        "type": "Doppelappartements",
        "size": "35-45",
        "waiting_period": "35-45"
      }
    ],
    "coordinates": [
      51.5433278,
      9.9491999
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/gutenbergstrasse-2-42-studentendorf"
  },
  {
    "id": 12,
    "address": "Hermann-Rein-Straße 5-13",
    "housing": [
      {
        "type": "Doppelappartements",
        "size": "",
        "waiting_period": ""
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "50",
        "waiting_period": "50"
      }
    ],
    "coordinates": [
      51.554506,
      9.937757
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/hermann-rein-strasse-5-13"
  },
  {
    "id": 13,
    "address": "Hermann-Rein-Straße 5-13",
    "housing": [
      {
        "type": "Familie mit Kind",
        "size": "50",
        "waiting_period": "50"
      },
      {
        "type": "Familie mit Kind",
        "size": "58-61",
        "waiting_period": "58-61"
      }
    ],
    "coordinates": [
      51.554506,
      9.937757
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/hermann-rein-strasse-5-13"
  },
  {
    "id": 14,
    "address": "Johanniskirchhof 3/ Paulinerstraße 9",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "17-25",
        "waiting_period": "17-25"
      },
      {
        "type": "Doppelappartements",
        "size": "30-40",
        "waiting_period": "30-40"
      }
    ],
    "coordinates": [
      50.87566,
      8.77436
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/johanniskirchhof-3/paulinerstrasse-9"
  },
  {
    "id": 15,
    "address": "Kellnerweg 8-24",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "25",
        "waiting_period": "25"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "15-34",
        "waiting_period": "15-34"
      }
    ],
    "coordinates": [
      51.56076,
      9.951418
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kellnerweg-8-24"
  },
  {
    "id": 16,
    "address": "Kreuzbergring 2",
    "housing": [
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "13-22",
        "waiting_period": "13-22"
      }
    ],
    "coordinates": [
      51.542318800000004,
      9.932971749642508
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-2"
  },
  {
    "id": 17,
    "address": "Kreuzbergring 4/4a",
    "housing": [
      {
        "type": "3er-Gruppenwohnungen",
        "size": "14-18",
        "waiting_period": "14-18"
      },
      {
        "type": "4er-Gruppenwohnungen",
        "size": "10-18",
        "waiting_period": "10-18"
      }
    ],
    "coordinates": [
      51.5424529,
      9.9335963
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-4/4a"
  },
  {
    "id": 18,
    "address": "Kreuzbergring 14/16",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "12-17",
        "waiting_period": "12-17"
      }
    ],
    "coordinates": [
      51.542852,
      9.9348433
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-14/16"
  },
  {
    "id": 19,
    "address": "Kreuzbergring 18/20",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "17",
        "waiting_period": "17"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "7-15",
        "waiting_period": "7-15"
      }
    ],
    "coordinates": [
      51.5429766,
      9.9353462
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-18/20"
  },
  {
    "id": 20,
    "address": "Kreuzbergring 22/24",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "10-16",
        "waiting_period": "10-16"
      },
      {
        "type": "Einzelzimmer in 3er-Gruppenwohnungen",
        "size": "10-13",
        "waiting_period": "10-13"
      }
    ],
    "coordinates": [
      51.5431444,
      9.9359086
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-22/24"
  },
  {
    "id": 21,
    "address": "Kreuzbergring 30/32",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "12-22",
        "waiting_period": "12-22"
      }
    ],
    "coordinates": [
      51.5434178,
      9.9368274
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-30/32"
  },
  {
    "id": 22,
    "address": "Kreuzbergring 44/46",
    "housing": [
      {
        "type": "Einzelzimmer",
        "size": "12-19",
        "waiting_period": "12-19"
      }
    ],
    "coordinates": [
      51.5447013,
      9.9417964
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-44/46"
  },
  {
    "id": 23,
    "address": "Kreuzbergring 56-56D, Colosseum",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "21-29",
        "waiting_period": "21-29"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "16",
        "waiting_period": "16"
      },
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "16",
        "waiting_period": "16"
      },
      {
        "type": "Einzelzimmer in 6er-Gruppenwohnungen",
        "size": "16-22",
        "waiting_period": "16-22"
      }
    ],
    "coordinates": [
      51.544429,
      9.945196
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kreuzbergring-56-56d"
  },
  {
    "id": 24,
    "address": "Kurze Straße 15, Carl-Friedrich-Gauß-Heim",
    "housing": [
      {
        "type": "Einzelzimmer, möbliert",
        "size": "11-19",
        "waiting_period": "11-19"
      }
    ],
    "coordinates": [
      51.5305798,
      9.9358869
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/kurze-strasse-15-carl-friedrich-gaussheim"
  },
  {
    "id": 25,
    "address": "Robert-Koch-Straße 38",
    "housing": [
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "12",
        "waiting_period": "12"
      },
      {
        "type": "Einzelappartements",
        "size": "17-19",
        "waiting_period": "17-19"
      },
      {
        "type": "Doppelappartements",
        "size": "35",
        "waiting_period": "35"
      },
      {
        "type": "Doppelappartements",
        "size": "37",
        "waiting_period": "37"
      },
      {
        "type": "Doppelappartements",
        "size": "50",
        "waiting_period": "50"
      }
    ],
    "coordinates": [
      51.54947005,
      9.93960844296578
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/robert-koch-strasse-38"
  },
  {
    "id": 26,
    "address": "Roedererstraße 15, Max-Kade-Haus",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "13-20",
        "waiting_period": "13-20"
      }
    ],
    "coordinates": [
      51.54404195,
      9.94638720774241
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/roedererstrasse-15-max-kade-haus"
  },
  {
    "id": 27,
    "address": "Rosenbachweg 2-12, Studentensiedlung",
    "housing": [
      {
        "type": "Einzelappartements",
        "size": "17",
        "waiting_period": "17"
      },
      {
        "type": "Einzelappartements",
        "size": "16-18",
        "waiting_period": "16-18"
      },
      {
        "type": "Doppelappartements",
        "size": "22",
        "waiting_period": "22"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "17",
        "waiting_period": "17"
      }
    ],
    "coordinates": [
      51.553904,
      9.93751
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/rosenbachweg-2-12-studentensiedlung"
  },
  {
    "id": 28,
    "address": "Stumpfebiel 2/2a",
    "housing": [
      {
        "type": "Einzelzimmer",
        "size": "9-28",
        "waiting_period": "9-28"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "31-33",
        "waiting_period": "31-33"
      }
    ],
    "coordinates": [
      51.5356644,
      9.9336977
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/stumpfebiel-2/2a"
  },
  {
    "id": 29,
    "address": "Theodor-Heuss-Straße 13",
    "housing": [
      {
        "type": "Einzelzimmer in 3er-Gruppenwohnung",
        "size": "12-15",
        "waiting_period": "12-15"
      },
      {
        "type": "2er-Gruppenwohnungen",
        "size": "11-17",
        "waiting_period": "11-17"
      }
    ],
    "coordinates": [
      51.55463295,
      9.935553652180264
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/theodor-heuss-strasse-13"
  },
  {
    "id": 30,
    "address": "Zimmermannstraße 3/5",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "16-26",
        "waiting_period": "16-26"
      },
      {
        "type": "Einzelzimmer in 4er-Gruppenwohnungen",
        "size": "16",
        "waiting_period": "16"
      }
    ],
    "coordinates": [
      51.5533717,
      9.9403537
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/zimmermannstrasse-3/5"
  },
  {
    "id": 31,
    "address": "Zimmermannstraße 14/16, Papenberg",
    "housing": [
      {
        "type": "2er-Gruppenwohnungen",
        "size": "14-17",
        "waiting_period": "14-17"
      },
      {
        "type": "3er-Gruppenwohnungen",
        "size": "14-19",
        "waiting_period": "14-19"
      },
      {
        "type": "4er-Gruppenwohnungen",
        "size": "14-15",
        "waiting_period": "14-15"
      }
    ],
    "coordinates": [
      51.5519057,
      9.948444662558796
    ],
    "web_link": "https://www.studentenwerk-goettingen.de/studentisches-wohnen/unsere-wohnheime/zimmermannstrasse-14/16-am-papenberg"
  }
]
</script>