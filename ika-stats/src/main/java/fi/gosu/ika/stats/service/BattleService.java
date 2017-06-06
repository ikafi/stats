package fi.gosu.ika.stats.service;

import fi.gosu.ika.stats.domain.Battle;
import fi.gosu.ika.stats.domain.Troop;
import fi.gosu.ika.stats.repository.BattleRepository;
import fi.gosu.ika.stats.repository.ResourcesRepository;
import fi.gosu.ika.stats.repository.UnitRepository;
import fi.gosu.ika.stats.repository.TroopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Battle Service
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Service
public class BattleService {

    @Autowired private BattleRepository battleRepository;
    @Autowired private TroopRepository troopRepository;
    @Autowired private UnitRepository unitRepository;
    @Autowired private ResourcesRepository resourcesRepository;

    public List<Battle> findAll() {
        return battleRepository.findAll();
    }

    public Battle addBattle(Battle battle) {
        Battle oldBattle = battleRepository.findByCompatId(battle.getCompatId());
        if (oldBattle == null) {
            oldBattle = battle;
        } else {
            oldBattle.setRounds(battle.getRounds());
            oldBattle.setTime(battle.getTime());
        }
        List<Troop> troops = new ArrayList<>();
            for (Troop troop : battle.getTroops()) {
            troop.setUnits(unitRepository.save(troop.getUnits()));
            troops.add(troop);
        }
        oldBattle.setTroops(troopRepository.save(troops));
        oldBattle.setLoot(resourcesRepository.save(battle.getLoot()));
        return battleRepository.save(oldBattle);
    }

    public Battle findOne(Long id) {
        return battleRepository.findOne(id);
    }
}
