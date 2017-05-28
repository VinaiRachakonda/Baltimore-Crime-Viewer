<template lang="html">
    <div id=filters>
        <p>Filter by District</p>
        <b-form-select v-model="districtChoice"
                       :options="Districts"
                       class="mb-3">
        </b-form-select>
        <p>Filter by Neighborhood</p>
        <b-form-select v-model="selected"
                       :options="Noptions"
                       class="mb-3">
        </b-form-select>
        <!--<p>Filter by Time Span</p>-->
        <!--<b-form-select v-model="timeChoice"-->
                <!--:options="TimeSpan"-->
                <!--class="mb-3">-->
        <!--</b-form-select>-->
    </div>
</template>

<script>
  import {EventBus} from '.././event-bus.js';

  export default {
    name: 'filters',
    data()  {
      return {
        selected: 'Abell',
        timeChoice:'full-time',
        districtChoice: 'Northwest',
        Noptions: [
          {
            text: 'All',
            value: 'all'
          },
          {text: 'Abell', value: 'Abell'},
          {text: 'Allendale', value: 'Allendale'},
          {text: 'Arcadia', value: 'Arcadia'},
          {text: 'Arlington', value: 'Arlington'},
          {text: 'Armistead Gardens', value: 'Armistead Gardens'},
          {text: 'Ashburton', value: 'Ashburton'},
          {text: 'Baltimore Highlands', value: 'Baltimore Highlands'},
          {
            text: 'Patterson Park Neighborhood',
            value: 'Patterson Park Neighborhood'
          },
          {text: 'Barclay', value: 'Barclay'},
          {text: 'Barre Circle', value: 'Barre Circle'},
          {text: 'Beechfield', value: 'Beechfield'},
          {text: 'Belair-Parkside', value: 'Belair-Parkside'},
          {text: 'Bellona-Gittings', value: 'Bellona-Gittings'},
          {text: 'Berea', value: 'Berea'},
          {text: 'Better Waverly', value: 'Better Waverly'},
          {text: 'Beverly Hills', value: 'Beverly Hills'},
          {text: 'Biddle Street', value: 'Biddle Street'},
          {text: 'Blythewood', value: 'Blythewood'},
          {text: 'Bolton Hill', value: 'Bolton Hill'},
          {text: 'Boyd-Booth', value: 'Boyd-Booth'},
          {text: 'Brewers Hill', value: 'Brewers Hill'},
          {text: 'Bridgeview/Greenlawn', value: 'Bridgeview/Greenlawn'},
          {text: 'Broadway East', value: 'Broadway East'},
          {text: 'Broening Manor', value: 'Broening Manor'},
          {text: 'Brooklyn', value: 'Brooklyn'},
          {text: 'Burleith-Leighton', value: 'Burleith-Leighton'},
          {text: "Butcher's Hill", value: "Butcher's Hill"},
          {text: 'Callaway-Garrison', value: 'Callaway-Garrison'},
          {text: 'Cameron Village', value: 'Cameron Village'},
          {text: 'Canton', value: 'Canton'},
          {text: 'Canton Industrial Area', value: 'Canton Industrial Area'},
          {
            text: 'Carroll - Camden Industrial Area',
            value: 'Carroll - Camden Industrial Area'
          },
          {text: 'Carroll Park', value: 'Carroll Park'},
          {text: 'Carroll-South Hilton', value: 'Carroll-South Hilton'},
          {text: 'Carrollton Ridge', value: 'Carrollton Ridge'},
          {text: 'Cedarcroft', value: 'Cedarcroft'},
          {text: 'Cedmont', value: 'Cedmont'},
          {text: 'Cedonia', value: 'Cedonia'},
          {text: 'Central Forest Park', value: 'Central Forest Park'},
          {text: 'Central Park Heights', value: 'Central Park Heights'},
          {text: 'Charles North', value: 'Charles North'},
          {text: 'Cherry Hill', value: 'Cherry Hill'},
          {text: 'Cheswolde', value: 'Cheswolde'},
          {text: 'Chinquapin Park', value: 'Chinquapin Park'},
          {text: 'Orchard Ridge', value: 'Orchard Ridge'},
          {text: 'Clifton Park', value: 'Clifton Park'},
          {text: 'Coldspring', value: 'Coldspring'},
          {
            text: 'Coldstream Homestead Montebello',
            value: 'Coldstream Homestead Montebello'
          },
          {
            text: 'Concerned Citizens Of Forest Park',
            value: 'Concerned Citizens Of Forest Park'
          },
          {text: 'Coppin Heights/Ash-Co-East', value: 'Coppin Heights/Ash-Co-East'},
          {text: 'Cross Country', value: 'Cross Country'},
          {text: 'Cross Keys', value: 'Cross Keys'},
          {text: 'Curtis Bay', value: 'Curtis Bay'},
          {text: 'Curtis Bay Industrial Area', value: 'Curtis Bay Industrial Area'},
          {text: 'Cylburn', value: 'Cylburn'},
          {text: 'Darley Park', value: 'Darley Park'},
          {text: 'Dickeyville', value: 'Dickeyville'},
          {text: 'Dolfield', value: 'Dolfield'},
          {text: 'Dorchester', value: 'Dorchester'},
          {text: 'Downtown', value: 'Downtown'},
          {text: 'Druid Heights', value: 'Druid Heights'},
          {text: 'Druid Hill Park', value: 'Druid Hill Park'},
          {text: 'Dunbar-Broadway', value: 'Dunbar-Broadway'},
          {text: 'Dundalk Marine Terminal', value: 'Dundalk Marine Terminal'},
          {text: 'East Arlington', value: 'East Arlington'},
          {text: 'East Baltimore Midway', value: 'East Baltimore Midway'},
          {text: 'Easterwood', value: 'Easterwood'},
          {text: 'Eastwood', value: 'Eastwood'},
          {text: 'Edmondson Village', value: 'Edmondson Village'},
          {text: 'Ednor Gardens-Lakeside', value: 'Ednor Gardens-Lakeside'},
          {text: 'Ellwood Park/Monument', value: 'Ellwood Park/Monument'},
          {text: 'Evergreen', value: 'Evergreen'},
          {text: 'Evergreen Lawn', value: 'Evergreen Lawn'},
          {text: 'Fairfield Area', value: 'Fairfield Area'},
          {text: 'Fairmont', value: 'Fairmont'},
          {text: 'Fallstaff', value: 'Fallstaff'},
          {text: 'Federal Hill', value: 'Federal Hill'},
          {text: 'Fells Point', value: 'Fells Point'},
          {text: 'Forest Park', value: 'Forest Park'},
          {text: 'Forest Park Golf Course', value: 'Forest Park Golf Course'},
          {text: 'Frankford', value: 'Frankford'},
          {text: 'Franklin Square', value: 'Franklin Square'},
          {text: 'Franklintown', value: 'Franklintown'},
          {text: 'Franklintown Road', value: 'Franklintown Road'},
          {text: 'Garwyn Oaks', value: 'Garwyn Oaks'},
          {text: 'Gay Street', value: 'Gay Street'},
          {text: 'Glen', value: 'Glen'},
          {text: 'Glen Oaks', value: 'Glen Oaks'},
          {text: 'Glenham-Belhar', value: 'Glenham-Belhar'},
          {text: 'Graceland Park', value: 'Graceland Park'},
          {text: 'Greektown', value: 'Greektown'},
          {text: 'Greenmount Cemetery', value: 'Greenmount Cemetery'},
          {text: 'Greenmount West', value: 'Greenmount West'},
          {text: 'Greenspring', value: 'Greenspring'},
          {text: 'Grove Park', value: 'Grove Park'},
          {text: 'Guilford', value: 'Guilford'},
          {text: 'Gwynns Falls', value: 'Gwynns Falls'},
          {text: 'Gwynns Falls/Leakin Park', value: 'Gwynns Falls/Leakin Park'},
          {text: 'Hampden', value: 'Hampden'},
          {text: 'Hamilton Hills', value: 'Hamilton Hills'},
          {text: 'Harlem Park', value: 'Harlem Park'},
          {text: 'Harwood', value: 'Harwood'},
          {text: 'Hawkins Point', value: 'Hawkins Point'},
          {text: 'Heritage Crossing', value: 'Heritage Crossing'},
          {text: 'Herring Run Park', value: 'Herring Run Park'},
          {text: 'Highlandtown', value: 'Highlandtown'},
          {text: 'Hillen', value: 'Hillen'},
          {text: 'Hoes Heights', value: 'Hoes Heights'},
          {text: 'Holabird Industrial Park', value: 'Holabird Industrial Park'},
          {text: 'Hollins Market', value: 'Hollins Market'},
          {text: 'Homeland', value: 'Homeland'},
          {text: 'Hopkins Bayview', value: 'Hopkins Bayview'},
          {text: 'Howard Park', value: 'Howard Park'},
          {text: 'Hunting Ridge', value: 'Hunting Ridge'},
          {text: 'Idlewood', value: 'Idlewood'},
          {text: 'Inner Harbor', value: 'Inner Harbor'},
          {text: 'Irvington', value: 'Irvington'},
          {text: 'Johns Hopkins Homewood', value: 'Johns Hopkins Homewood'},
          {text: 'Johnston Square', value: 'Johnston Square'},
          {text: 'Jones Falls Area', value: 'Jones Falls Area'},
          {text: 'Jonestown', value: 'Jonestown'},
          {text: 'Bayview', value: 'Bayview'},
          {text: 'Kenilworth Park', value: 'Kenilworth Park'},
          {text: 'Kernewood', value: 'Kernewood'},
          {text: 'Keswick', value: 'Keswick'},
          {text: 'Kresson', value: 'Kresson'},
          {text: 'Lake Evesham', value: 'Lake Evesham'},
          {text: 'Lake Walker', value: 'Lake Walker'},
          {text: 'Lakeland', value: 'Lakeland'},
          {text: 'Langston Hughes', value: 'Langston Hughes'},
          {text: 'Lauraville', value: 'Lauraville'},
          {text: 'Levindale', value: 'Levindale'},
          {text: 'Liberty Square', value: 'Liberty Square'},
          {text: 'Little Italy', value: 'Little Italy'},
          {text: 'Loch Raven', value: 'Loch Raven'},
          {text: 'Locust Point', value: 'Locust Point'},
          {
            text: 'Locust Point Industrial Area',
            value: 'Locust Point Industrial Area'
          },
          {text: 'Lower Herring Run Park', value: 'Lower Herring Run Park'},
          {text: 'Loyola/Notre Dame', value: 'Loyola/Notre Dame'},
          {text: 'Lucille Park', value: 'Lucille Park'},
          {text: 'Madison Park', value: 'Madison Park'},
          {text: 'Madison-Eastend', value: 'Madison-Eastend'},
          {text: 'Mayfield', value: 'Mayfield'},
          {text: 'McElderry Park', value: 'McElderry Park'},
          {text: 'Medfield', value: 'Medfield'},
          {text: 'Medford', value: 'Medford'},
          {text: 'Mid-Govans', value: 'Mid-Govans'},
          {text: 'Mid-Town Belvedere', value: 'Mid-Town Belvedere'},
          {
            text: 'Middle Branch/Reedbird Parks',
            value: 'Middle Branch/Reedbird Parks'
          },
          {text: 'Middle East', value: 'Middle East'},
          {text: 'Midtown-Edmondson', value: 'Midtown-Edmondson'},
          {text: 'Millhill', value: 'Millhill'},
          {text: 'Milton-Montford', value: 'Milton-Montford'},
          {text: 'Mondawmin', value: 'Mondawmin'},
          {text: 'Montebello', value: 'Montebello'},
          {text: 'Moravia-Walther', value: 'Moravia-Walther'},
          {text: 'Morgan Park', value: 'Morgan Park'},
          {text: 'Morgan State University', value: 'Morgan State University'},
          {text: 'Morrell Park', value: 'Morrell Park'},
          {text: 'Mosher', value: 'Mosher'},
          {text: 'New Southwest/Mount Clare', value: 'New Southwest/Mount Clare'},
          {text: 'Mount Holly', value: 'Mount Holly'},
          {text: 'Mount Vernon', value: 'Mount Vernon'},
          {text: 'Mount Washington', value: 'Mount Washington'},
          {text: 'Mount Winans', value: 'Mount Winans'},
          {text: 'Mt Pleasant Park', value: 'Mt Pleasant Park'},
          {text: 'New Northwood', value: 'New Northwood'},
          {text: 'North Harford Road', value: 'North Harford Road'},
          {
            text: 'North Roland Park/Poplar Hill',
            value: 'North Roland Park/Poplar Hill'
          },
          {text: 'Northwest Community Action', value: 'Northwest Community Action'},
          {text: "O'Donnell Heights", value: "O'Donnell Heights"},
          {text: 'Oakenshawe', value: 'Oakenshawe'},
          {text: 'Oaklee', value: 'Oaklee'},
          {text: 'Oldtown', value: 'Oldtown'},
          {text: 'Oliver', value: 'Oliver'},
          {text: 'Orangeville', value: 'Orangeville'},
          {
            text: 'Orangeville Industrial Area',
            value: 'Orangeville Industrial Area'
          },
          {text: 'Original Northwood', value: 'Original Northwood'},
          {text: 'Otterbein', value: 'Otterbein'},
          {text: 'Overlea', value: 'Overlea'},
          {text: 'Panway/Braddish Avenue', value: 'Panway/Braddish Avenue'},
          {text: 'Park Circle', value: 'Park Circle'},
          {text: 'Parklane', value: 'Parklane'},
          {text: 'Parkside', value: 'Parkside'},
          {text: 'Parkview/Woodbrook', value: 'Parkview/Woodbrook'},
          {text: 'Patterson Park', value: 'Patterson Park'},
          {text: 'Patterson Place', value: 'Patterson Place'},
          {text: 'Pen Lucy', value: 'Pen Lucy'},
          {text: 'Penn North', value: 'Penn North'},
          {text: 'Penn-Fallsway', value: 'Penn-Fallsway'},
          {
            text: 'Penrose/Fayette Street Outreach',
            value: 'Penrose/Fayette Street Outreach'
          },
          {text: 'Perkins Homes', value: 'Perkins Homes'},
          {text: 'Perring Loch', value: 'Perring Loch'},
          {text: 'Pimlico Good Neighbors', value: 'Pimlico Good Neighbors'},
          {text: 'Pleasant View Gardens', value: 'Pleasant View Gardens'},
          {text: 'Poppleton', value: 'Poppleton'},
          {text: 'Port Covington', value: 'Port Covington'},
          {text: 'Pulaski Industrial Area', value: 'Pulaski Industrial Area'},
          {text: 'Purnell', value: 'Purnell'},
          {text: 'Radnor-Winston', value: 'Radnor-Winston'},
          {text: 'Ramblewood', value: 'Ramblewood'},
          {text: 'Reisterstown Station', value: 'Reisterstown Station'},
          {text: 'Remington', value: 'Remington'},
          {text: 'Reservoir Hill', value: 'Reservoir Hill'},
          {text: 'Richnor Springs', value: 'Richnor Springs'},
          {text: "Ridgely's Delight", value: "Ridgely's Delight"},
          {text: 'Riverside', value: 'Riverside'},
          {text: 'Rognel Heights', value: 'Rognel Heights'},
          {text: 'Roland Park', value: 'Roland Park'},
          {text: 'Rosebank', value: 'Rosebank'},
          {text: 'Rosemont', value: 'Rosemont'},
          {text: 'Rosemont East', value: 'Rosemont East'},
          {
            text: 'Rosemont Homeowners/Tenants',
            value: 'Rosemont Homeowners/Tenants'
          },
          {text: 'Sabina-Mattfeldt', value: 'Sabina-Mattfeldt'},
          {text: 'Saint Agnes', value: 'Saint Agnes'},
          {text: 'Saint Helena', value: 'Saint Helena'},
          {text: 'Saint Josephs', value: 'Saint Josephs'},
          {text: 'Saint Paul', value: 'Saint Paul'},
          {text: 'Sandtown-Winchester', value: 'Sandtown-Winchester'},
          {text: 'South Baltimore', value: 'South Baltimore'},
          {text: 'Seton Business Park', value: 'Seton Business Park'},
          {text: 'Seton Hill', value: 'Seton Hill'},
          {text: 'Sharp-Leadenhall', value: 'Sharp-Leadenhall'},
          {text: 'Shipley Hill', value: 'Shipley Hill'},
          {text: 'South Clifton Park', value: 'South Clifton Park'},
          {
            text: 'Spring Garden Industrial Area',
            value: 'Spring Garden Industrial Area'
          },
          {text: 'Stadium Area', value: 'Stadium Area'},
          {text: 'Stonewood-Pentwood-Winston', value: 'Stonewood-Pentwood-Winston'},
          {text: 'Taylor Heights', value: 'Taylor Heights'},
          {text: 'Ten Hills', value: 'Ten Hills'},
          {text: 'The Orchards', value: 'The Orchards'},
          {text: 'Towanda-Grantley', value: 'Towanda-Grantley'},
          {text: 'Tremont', value: 'Tremont'},
          {text: 'Tuscany-Canterbury', value: 'Tuscany-Canterbury'},
          {text: 'Union Square', value: 'Union Square'},
          {text: 'University Of Maryland', value: 'University Of Maryland'},
          {text: 'Uplands', value: 'Uplands'},
          {text: 'Upper Fells Point', value: 'Upper Fells Point'},
          {text: 'Upton', value: 'Upton'},
          {text: 'Villages Of Homeland', value: 'Villages Of Homeland'},
          {text: 'Violetville', value: 'Violetville'},
          {text: 'Wakefield', value: 'Wakefield'},
          {text: 'Walbrook', value: 'Walbrook'},
          {text: 'Waltherson', value: 'Waltherson'},
          {text: 'Washington Hill', value: 'Washington Hill'},
          {text: 'Washington Village/Pigtown', value: 'Washington Village/Pigtown'},
          {text: 'Waverly', value: 'Waverly'},
          {text: 'West Arlington', value: 'West Arlington'},
          {text: 'West Forest Park', value: 'West Forest Park'},
          {text: 'West Hills', value: 'West Hills'},
          {text: 'Westfield', value: 'Westfield'},
          {text: 'Westgate', value: 'Westgate'},
          {text: 'Westport', value: 'Westport'},
          {text: 'Wilson Park', value: 'Wilson Park'},
          {text: 'Winchester', value: 'Winchester'},
          {text: 'Windsor Hills', value: 'Windsor Hills'},
          {text: 'Winston-Govans', value: 'Winston-Govans'},
          {text: 'Woodberry', value: 'Woodberry'},
          {text: 'Woodbourne Heights', value: 'Woodbourne Heights'},
          {text: 'Woodbourne-McCabe', value: 'Woodbourne-McCabe'},
          {text: 'Woodmere', value: 'Woodmere'},
          {text: 'Wyman Park', value: 'Wyman Park'},
          {text: 'Wyndhurst', value: 'Wyndhurst'},
          {text: 'Yale Heights', value: 'Yale Heights'},
          {text: 'Lower Edmondson Village', value: 'Lower Edmondson Village'},
          {text: 'Wilhelm Park', value: 'Wilhelm Park'},
          {text: 'Edgewood', value: 'Edgewood'},
          {text: 'Evesham Park', value: 'Evesham Park'},
          {text: 'Belvedere', value: 'Belvedere'},
          {text: 'Wrenlane', value: 'Wrenlane'},
          {text: 'York-Homeland', value: 'York-Homeland'},
          {text: 'CARE', value: 'CARE'},
          {text: 'Downtown West', value: 'Downtown West'},
          {text: 'Belair-Edison', value: 'Belair-Edison'},
          {text: 'Four By Four', value: 'Four By Four'},
          {text: 'Charles Village', value: 'Charles Village'},
          {text: 'Old Goucher', value: 'Old Goucher'},],
        TimeSpan: [{
          text: 'full-time',
          value: 'full-time'
        }, {
          text: 'one week',
          value: 'one week'
        },
          {
            text: 'two weeks',
            value: 'two weeks'
          }, {
            text: 'three weeks',
            value: 'three weeks'
          }],
        Districts: [
          {text: 'Northwest', value: 'Northwest'},
          {text: 'North', value: 'North'},
          {text: 'Northeastern', value: 'Northeastern'},
          {text: 'West', value: 'West'},
          {text: 'Central', value: 'Central'},
          {text: 'East', value: 'East'},
          {text: 'Southwestern', value: 'Southwestern'},
          {text: 'Southern', value: 'Southern'},
          {text: 'Southeastern', value: 'Southeastern'},
        ]
      }
    },
    methods: {
    },
    watch: {
      selected() {
        console.log(this.selected);
        EventBus.$emit('neighborhood:change', this.selected);
      },
      timeChoice() {
        console.log(this.timeChoice);
        EventBus.$emit('time:change', this.timeChoice);
      },
      districtChoice() {
        console.log(this.districtChoice);
        EventBus.$emit('district:change', this.districtChoice);
      }
    }

  }
</script>

<style>

</style>