import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Bookmark, Copy, History, PlayCircle, Share2 } from 'lucide-react';



// dummy data
interface Dua {
    id: number
    title: string
    arabic?: string
    transliteration?: string
    translation: string
    reference?: {
      text: string
      source?: string
    }
  }
  
  const duas: Dua[] = [
    {
      id: 1,
      title: "The servant is dependent on his Lord #1",
      translation:
        "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: {
        text: "Surah Al-Fatir 35:15",
      },
    },
    {
      id: 2,
      title: "Conditions for Dua to be successful",
      translation:
        "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): \"And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.\" (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
      arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُۥ لَا شَرِيكَ لَهُۥ لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ ٱللَّٰهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِىَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا ٱلْجَدِّ مِنْكَ ٱلْجَدُّ",
      transliteration:
        "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
      reference: {
        text: "Bukhari: 844",
      },
    },
  ]


const Duas = () => {
    return (
        <ScrollArea className="flex-1">
          <div className="container max-w-4xl mx-auto p-4 space-y-6">
            <div className="text-sm">
              <span className="text-muted-foreground">Section: </span>
              <span>The servant is dependent on his Lord</span>
            </div>
            {duas.map((dua) => (
              <Card key={dua.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                      {dua.id}
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="font-medium text-emerald-600">
                        {dua.id}. {dua.title}
                      </h3>
                      {dua.arabic && (
                        <p className="text-2xl text-right leading-loose font-arabic">
                          {dua.arabic}
                        </p>
                      )}
                      {dua.transliteration && (
                        <p className="text-muted-foreground italic">
                          Transliteration: {dua.transliteration}
                        </p>
                      )}
                      <p>Translation: {dua.translation}</p>
                      {dua.reference && (
                        <div className="text-sm">
                          <span className="text-emerald-600 font-medium">
                            Reference:{" "}
                          </span>
                          <span className="text-muted-foreground">
                            {dua.reference.text}
                            {dua.reference.source && ` - ${dua.reference.source}`}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 pt-2">
                        <Button size="icon" variant="ghost">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <PlayCircle className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <History className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )
    }
    
    

export default Duas;