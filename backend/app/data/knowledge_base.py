import json

knowledge_base = {
    "election_phases": [
        {
            "phase_number": 1,
            "title": "Election Announcement",
            "description": "The Election Commission of India (ECI) announces the election schedule, dates, and phases.",
            "key_body": "Election Commission of India (ECI)",
            "what_citizen_should_know": "The Model Code of Conduct (MCC) comes into effect immediately. No new government schemes or policies can be announced that might influence voters."
        },
        {
            "phase_number": 2,
            "title": "Voter Registration",
            "description": "The period for citizens to enroll as new voters, update details, or delete entries.",
            "key_body": "Electoral Registration Officer (ERO)",
            "what_citizen_should_know": "You must verify your name on the electoral roll. Merely having a Voter ID (EPIC) is not enough to vote; your name must be on the voter list."
        },
        {
            "phase_number": 3,
            "title": "Candidate Nominations",
            "description": "Candidates file their nomination papers and sworn affidavits detailing their assets, education, and criminal records.",
            "key_body": "Returning Officer (RO)",
            "what_citizen_should_know": "This is your chance to research your candidates. All affidavits are public on the ECI KYC app and affidavit portal."
        },
        {
            "phase_number": 4,
            "title": "Election Campaign",
            "description": "Political parties and candidates hold rallies, distribute manifestos, and campaign.",
            "key_body": "Political Parties & Candidates",
            "what_citizen_should_know": "Campaigning is strictly monitored under MCC. It officially ends 48 hours before polling begins (the 'Silent Period')."
        },
        {
            "phase_number": 5,
            "title": "Voting Day",
            "description": "Eligible voters cast their ballots at designated polling booths using EVMs.",
            "key_body": "Presiding Officer & Polling Officials",
            "what_citizen_should_know": "Mobile phones are not allowed inside the booth. You need to bring an approved ID document. The VVPAT machine will show a slip for 7 seconds to verify your vote."
        },
        {
            "phase_number": 6,
            "title": "Vote Counting",
            "description": "EVMs are opened at secure counting centers and votes are tabulated round by round.",
            "key_body": "Returning Officer & Counting Staff",
            "what_citizen_should_know": "Counting happens under strict security and CCTV surveillance. VVPAT slips from randomly selected polling stations are manually counted to cross-verify EVM results."
        },
        {
            "phase_number": 7,
            "title": "Result Declaration",
            "description": "The Returning Officer officially declares the winner for each constituency.",
            "key_body": "Returning Officer",
            "what_citizen_should_know": "The winning candidate receives a Certificate of Election. Any disputes regarding the election must be filed as an election petition in the High Court."
        },
        {
            "phase_number": 8,
            "title": "Government Formation",
            "description": "The party or coalition with a majority of seats forms the government.",
            "key_body": "President of India / State Governor",
            "what_citizen_should_know": "The leader of the majority party is invited to take the oath as Prime Minister (or Chief Minister) and form the Cabinet."
        }
    ],
    "forms": [
        {
            "form_number": "Form 6",
            "purpose": "Application for new voter registration for general electors.",
            "who_needs_it": "First-time voters (18+ years) or individuals shifting residence to a different constituency.",
            "portal_url": "voters.eci.gov.in",
            "documents_needed": ["Passport-size photograph", "Address proof (Aadhaar, utility bill, passbook)", "Age proof (Aadhaar, PAN, birth certificate)"],
            "processing_time": "Approximately 30 days"
        },
        {
            "form_number": "Form 6A",
            "purpose": "Application for inclusion of name in electoral roll by an overseas Indian elector (NRI).",
            "who_needs_it": "Non-Resident Indians (NRIs) holding an Indian passport who have not acquired citizenship of any other country.",
            "portal_url": "voters.eci.gov.in",
            "documents_needed": ["Passport-size photograph", "Self-attested copy of valid Indian passport", "Copy of visa"],
            "processing_time": "Approximately 30 days"
        },
        {
            "form_number": "Form 7",
            "purpose": "Application for objecting to inclusion or seeking deletion of name in electoral roll.",
            "who_needs_it": "Anyone reporting a deceased voter, someone who has permanently shifted, or objecting to a wrong entry.",
            "portal_url": "voters.eci.gov.in",
            "documents_needed": ["Details of the elector whose name is to be deleted", "Death certificate (if applicable)"],
            "processing_time": "Varies after field verification"
        },
        {
            "form_number": "Form 8",
            "purpose": "Application for correction of particulars entered in electoral roll, replacement of EPIC, or marking of PwD.",
            "who_needs_it": "Voters needing to fix spelling mistakes, update photo, replace a lost Voter ID, or register as Persons with Disabilities.",
            "portal_url": "voters.eci.gov.in",
            "documents_needed": ["Proof of correct information (e.g., Aadhaar for name/DOB correction)", "Copy of FIR/police report (for lost EPIC)"],
            "processing_time": "Approximately 30 days"
        },
        {
            "form_number": "Form 8A",
            "purpose": "Application for shifting of residence within the same constituency.",
            "who_needs_it": "Voters who have changed their address but still live in the same electoral constituency.",
            "portal_url": "voters.eci.gov.in",
            "documents_needed": ["New address proof (Aadhaar, rent agreement, utility bill)"],
            "processing_time": "Approximately 30 days"
        }
    ],
    "voting_day_documents": [
        "Voter ID card (EPIC)",
        "Aadhaar Card",
        "PAN Card",
        "Unique Disability ID (UDID) Card",
        "Service Identity Card with photograph issued by Central/State Govt./PSUs/Public Limited Companies",
        "Passbook with photograph issued by Bank/Post Office",
        "Health Insurance Smart Card issued under the scheme of Ministry of Labour",
        "Driving License",
        "Passport",
        "Smart Card issued by RGI under NPR",
        "Pension document with photograph",
        "Official identity card issued to MPs/MLAs/MLCs",
        "MNREGA Job Card"
    ],
    "key_terms": {
        "EVM": "Electronic Voting Machine. The electronic device used to record votes safely and securely instead of paper ballots.",
        "VVPAT": "Voter Verifiable Paper Audit Trail. A machine attached to the EVM that prints a slip showing the symbol and name of the candidate you voted for. It is visible behind glass for 7 seconds before dropping into a sealed box.",
        "EPIC": "Electors Photo Identity Card. Commonly known as the Voter ID card.",
        "MCC": "Model Code of Conduct. A set of guidelines for political parties and candidates to ensure free and fair elections. It bans misuse of official machinery and bribing voters.",
        "ERO": "Electoral Registration Officer. The official responsible for maintaining the voter list for a constituency.",
        "Returning Officer": "The official responsible for overseeing the election in a constituency and declaring the final results.",
        "Presiding Officer": "The official in charge of a specific polling booth on election day to ensure voting happens smoothly.",
        "Constituency": "A geographical area that elects one representative to a legislative body.",
        "Booth": "The physical location (usually a school or community hall) where you go to cast your vote.",
        "NOTA": "None Of The Above. An option on the EVM that allows you to officially register your rejection of all candidates contesting in your constituency.",
        "First Past the Post": "The voting system used in India where the candidate who gets the most votes wins, even if they don't get an absolute majority.",
        "Affidavit": "A legally sworn document filed by a candidate declaring their criminal record, assets, liabilities, and educational qualifications.",
        "Silent Period": "The 48 hours immediately before polling begins, during which all public campaigning, rallies, and loudspeakers are strictly banned.",
        "Strong Room": "A highly secure, multi-lock room guarded 24/7 by central armed police forces where EVMs are stored before and after voting until counting day."
    },
    "voter_eligibility": {
        "minimum_age": "Must be 18 years old on the qualifying date (usually Jan 1st, April 1st, July 1st, or Oct 1st of the year).",
        "citizenship_requirement": "Must be a citizen of India.",
        "residency_requirement": "Must be an 'ordinary resident' of the polling area where they wish to enroll.",
        "disqualification_conditions": ["Declared to be of unsound mind by a competent court", "Disqualified due to corrupt practices or electoral offenses", "Not a citizen of India"],
        "nri_voting_rights": "NRIs holding an Indian passport can vote, but they must be physically present at their designated polling booth in India. There is currently no online or postal voting for NRIs."
    },
    "common_myths": [
        {
            "myth": "I cannot vote without my physical Voter ID card.",
            "truth": "False. As long as your name is on the electoral roll, you can vote using any of the 12 approved identity documents like Aadhaar, PAN card, or Driving License."
        },
        {
            "myth": "NRIs cannot vote in Indian elections.",
            "truth": "False. NRIs can register using Form 6A and vote, provided they have a valid Indian passport and are physically present at the booth on voting day."
        },
        {
            "myth": "My vote is not secret, someone can figure out who I voted for.",
            "truth": "False. Voting in India is conducted via a secret ballot. The EVM does not record the voter's identity alongside the vote."
        },
        {
            "myth": "EVMs can be hacked remotely via Bluetooth or WiFi.",
            "truth": "False. EVMs are standalone machines. They have no wireless communication capabilities, no internet connection, no Bluetooth, and no WiFi."
        },
        {
            "myth": "Voting is compulsory in India by law.",
            "truth": "False. Voting is a constitutional right, not a legal obligation. You will not face penalties for not voting."
        },
        {
            "myth": "I cannot vote if I moved to a new city for work.",
            "truth": "False. You can transfer your vote to your new city by filling Form 6, or you can travel back to your home constituency to vote."
        },
        {
            "myth": "NOTA means none of the candidates will win if NOTA gets the highest votes.",
            "truth": "False. Even if NOTA gets the maximum votes, the candidate with the second-highest votes (the highest among candidates) is declared the winner. NOTA is for expressing dissatisfaction, not triggering a re-election."
        },
        {
            "myth": "I need to be physically present at a government office to register to vote.",
            "truth": "False. You can complete the entire voter registration process online via voters.eci.gov.in or the Voter Helpline App from anywhere."
        },
        {
            "myth": "My single vote doesn't matter in a constituency with lakhs of voters.",
            "truth": "False. Elections in India have been won or lost by margins of less than 10 votes. Every single vote significantly impacts the mandate."
        },
        {
            "myth": "I will lose my job if I skip work to go vote.",
            "truth": "False. Under the Representation of the People Act, employers must grant a paid holiday to employees on polling day in their constituency. Deducting salary for voting is a punishable offense."
        }
    ],
    "eci_portals": {
        "Main ECI Website": "eci.gov.in - For general guidelines, MCC rules, and official announcements.",
        "Voter Services Portal": "voters.eci.gov.in - For voter registration, forms, and downloading e-EPIC.",
        "National Voter's Service Portal (Legacy)": "nvsp.in - Now redirects to voters.eci.gov.in.",
        "Electoral Search": "electoralsearch.eci.gov.in - To check if your name is on the voter list and find your booth.",
        "cVIGIL App": "cvigil.eci.gov.in - To report Model Code of Conduct violations anonymously with photos/videos.",
        "Candidate Affidavits": "affidavit.eci.gov.in - To read the criminal and financial backgrounds of contesting candidates."
    },
    "evm_vvpat_facts": [
        "EVMs have no wireless communication components (No WiFi, No Bluetooth, No Radio frequency).",
        "EVMs are standalone machines running on secure battery packs, independent of the power grid.",
        "Cannot be remotely accessed or connected to any external network or computer.",
        "First Level Checking (FLC) is done in the presence of political party representatives months before the election.",
        "Mock Polls are conducted on election morning. 50 votes are cast and tallied with VVPAT slips in front of polling agents.",
        "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing the candidate's serial number, name, and symbol.",
        "The VVPAT slip is visible to the voter behind a transparent window for 7 seconds before falling into a sealed drop box.",
        "If there's a dispute, the VVPAT slips can be physically counted. By rule, slips from 5 randomly selected polling stations per assembly constituency are mandatorily counted to verify the EVM results."
    ]
}

def get_formatted_context() -> str:
    """
    Returns the complete knowledge base as a formatted string
    for injection into the Gemini system prompt.
    """
    context = "VERIFIED ECI KNOWLEDGE BASE:\n\n"
    
    context += "--- ELECTION PHASES ---\n"
    for phase in knowledge_base["election_phases"]:
        context += f"Phase {phase['phase_number']}: {phase['title']}\n"
        context += f"Description: {phase['description']}\n"
        context += f"Key Body: {phase['key_body']}\n"
        context += f"Citizen Action: {phase['what_citizen_should_know']}\n\n"
        
    context += "--- VOTER FORMS ---\n"
    for form in knowledge_base["forms"]:
        context += f"Form: {form['form_number']}\n"
        context += f"Purpose: {form['purpose']}\n"
        context += f"Who needs it: {form['who_needs_it']}\n"
        context += f"Portal: {form['portal_url']}\n"
        context += f"Documents needed: {', '.join(form['documents_needed'])}\n"
        context += f"Processing time: {form['processing_time']}\n\n"
        
    context += "--- APPROVED VOTING DAY DOCUMENTS (Any 1 required) ---\n"
    for doc in knowledge_base["voting_day_documents"]:
        context += f"- {doc}\n"
    context += "\n"
        
    context += "--- KEY TERMS ---\n"
    for term, definition in knowledge_base["key_terms"].items():
        context += f"{term}: {definition}\n"
    context += "\n"
    
    context += "--- VOTER ELIGIBILITY ---\n"
    context += f"Age: {knowledge_base['voter_eligibility']['minimum_age']}\n"
    context += f"Citizenship: {knowledge_base['voter_eligibility']['citizenship_requirement']}\n"
    context += f"Residency: {knowledge_base['voter_eligibility']['residency_requirement']}\n"
    context += f"Disqualifications: {', '.join(knowledge_base['voter_eligibility']['disqualification_conditions'])}\n"
    context += f"NRIs: {knowledge_base['voter_eligibility']['nri_voting_rights']}\n\n"
    
    context += "--- MYTHS vs FACTS ---\n"
    for item in knowledge_base["common_myths"]:
        context += f"Myth: {item['myth']}\n"
        context += f"Truth: {item['truth']}\n\n"
        
    context += "--- OFFICIAL PORTALS ---\n"
    for name, url in knowledge_base["eci_portals"].items():
        context += f"{name}: {url}\n"
    context += "\n"
    
    context += "--- EVM & VVPAT SECURITY FACTS ---\n"
    for fact in knowledge_base["evm_vvpat_facts"]:
        context += f"- {fact}\n"
        
    return context
